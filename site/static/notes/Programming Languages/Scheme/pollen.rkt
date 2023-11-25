#lang racket

(require racket/string)

(provide (all-defined-out))

(define author "Mark Freeman")
(define base-url "mrkfrmn.com")

(define separator ":")
(define (join . strings)
    (string-join strings separator))
