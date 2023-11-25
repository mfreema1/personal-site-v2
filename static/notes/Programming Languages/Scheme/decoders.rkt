#lang racket

(require txexpr)
(require pollen/decode)
(require pollen/unstable/pygments)

(provide (all-defined-out))

;;; decoders are functions which take tx and produce output in the target
;;; language, which is html here.

;;; i just prefer calling it this.  it's used for hooking up one function to
;;; the next, so i consider it a pipe
(define pipe compose1)

;;; here, we perform a translation from the Racket language down to HTML.
;;; we do so using decoder functions, as well as operations such as
;;; `get-tag`, `get-attrs`, and `get-elements`.

(define (add-class class element)
    (cons (list 'class class) (get-attrs element)))

(define (add-id id element)
    (cons (list 'id id) (get-attrs element)))

;;; examine the incoming tag, if it matches, apply the transform.  we need
;;; to shield it in a procedure here because transforms are likely to involve
;;; undefined behavior when applied to the wrong tags.
(define (match-tag tag element transform)
    (if (eq? tag (get-tag element))
        ;;; (let ([attrs (get-attrs element)] [elements (get-elements element)])
            ;;; (transform element))
        (transform element)
        element))

;;; chapter, section, list-rules, sidebar, rule, ul, em, first-use, example
(define (decode-example element)
    (match-tag 'example element
        (lambda (element)
            (txexpr 'div
                (add-class "example" element)
                (get-elements element)))))

(define (decode-repl element)
    (match-tag 'repl element
        (lambda (element)
            (txexpr 'div
                (add-class "read-eval-print-loop" element)
                (get-elements element)))))

(define (decode-quotation element)
    (match-tag 'quotation element
        (lambda (element)
            (txexpr 'div
                (add-class "quote" element)
                (get-elements element)))))

(define (decode-section element)
    (match-tag 'section element
        (lambda (element)
            (txexpr 'div
                (add-class "section" element)
                (get-elements element)))))

;;; ;;; code blocks are based on Highlight.js.  it targets anything within a
;;; ;;; <pre><code> set of tags.
;;; (define (decode-code-block element)
;;;     (match-tag 'section decode-code-block
;;;         (lambda (element)
;;;             (txexpr 'div
;;;                 (add-class "code-block" element)
;;;                 (txexpr 'pre '()
;;;                     (txexpr 'code '((class "scheme"))
;;;                         (get-elements element)))))))

;;; code blocks are based on Pygment.  it targets anything within a
;;; <pre><code> set of tags.
(define (decode-code-block element)
    (match-tag 'code-block element
        (lambda (element)
            (txexpr 'div
                (add-class "code-block" element)
                (highlight 'scheme (string-join (get-elements element)))))))

;;; first-use are simply written in bold.  if an acronym for the word was
;;; supplied, then we can provide that as well.
(define (decode-first-use element)
    (match-tag 'first-use element
        (lambda (element)
            (txexpr 'span
                (add-class "first-use" element)
                (if (assq 'acronym (get-attrs element))
                    (append (get-elements element) 
                        (list (format " ~a " 
                            (cdr (assq 'acronym (get-attrs element))))))
                    (get-elements element))))))

;;; a ul peeks inside for li elements and renders them.  there is explicitly
;;; no handler for individual list items because the ul enforces special
;;; functionality for them.
;;; TODO: (define (decode-ul element))

(define (decode-unordered-list element)
    (if (eq? 'unordered-list (get-tag element))
        (txexpr 'ul
            (get-attrs element)
            (map 
                (lambda (element) 
                    (txexpr 'li '() (list element)))
                (get-elements element)))
        element))

(define (decode-block element)
    (if (eq? 'block (get-tag element))
        (txexpr 'div
            (cons '(class "block") (get-attrs element))
            (get-elements element))
        element))

;;; (define modify-)

;;; recursively parse from the root all the way down
(define (root . elements)
    ;;; you can provide any sort of modifications to elements now, before
    ;;; you go and translate to your target language (HTML here).

    ;;; so, you might want to run separate tree traversal steps here to
    ;;; prime each of the nodes.  once they start decoding, they can only
    ;;; depend on analysis of their children, not their parents (by nature
    ;;; of being depth-first, the parents will already have been decoded and
    ;;; are thus not usable). sort of a way to get multiple bites at the apple.
    (define modified-elements elements)

    (decode (txexpr 'root '() modified-elements)
        #:txexpr-proc (pipe
            decode-code-block
            decode-example
            decode-first-use
            decode-repl
            decode-quotation
            decode-section
            decode-unordered-list 
            decode-block)))
