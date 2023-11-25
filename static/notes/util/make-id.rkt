#lang racket

(require racket/random)
(require net/base64)

(provide (all-defined-out))

;;; our tags are created from 6 bytes where each bit is used for entropy.
;;; these bytes, when base64 encoded will produce an 8 character string.
(define (make-id) 
    (base64-encode (crypto-random-bytes 6) ""))

(make-id)