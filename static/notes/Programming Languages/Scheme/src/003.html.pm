#lang pollen

◊(require "../decoders.rkt")

◊(require pollen/unstable/pygments)

◊chapter[#:title "Evaluation Control and Recursion"]{
    ◊section[#:title "Evaluation Control"]{
        Scheme usually uses what is called ◊first-use{eager evaluation} when 
        applying a procedure.  It might not use this when instructed to do
        so via a ◊first-use{control structure}.

        ◊sidebar{See ◊link[#:target "elsyzxQ+"]{this} for more information.}

        ◊def[#:term "Eager Evaluation"]{The operator is first evaluated.  Then,
        the operands are immediately evaluated and those values replace the
        parameters of the procedure.  The body is then evaluated.}

        This contrasts with something like ◊first-use{lazy evaluation}.
        
        ◊def[#:term "Lazy Evaluation"]{The operator is first evaluated.  The
        body is evaluated and the parameters are only evaluated if they are
        needed.}

        ◊example{
            Think about something such as:

            ◊code-block{
                (define (foo bar) (42))
                (foo (expensive-procedure "baz"))
            }

            If the value of ◊code{(expensive-procedure "baz")} is not needed
            for the body of the procedure, ◊code{42}, then you save some time
            by not evaluating it.
        }
    }

    ◊section[#:title "Short Circuit Evaluation" #:targeted "elsyzxQ+"]{
        ◊def[#:term "Control Structure"]{
            A special procedure which allows the programmer to break away from
            the default of eager evaluation.
        }

        Both ◊code{and} and ◊code{or} are examples of short circuit evaluation.
    
        ◊example{
            An application of ◊code{and} might look something like:

            ◊code-block{
                (and foo bar baz)
            }

            Here, ◊code{foo} is evaluated first.  If and only if it evaluates
            to ◊code{#t} does ◊code{bar} get evaluated.
        }
    }

    ◊section[#:title "Conditional Evaluation"]{
        This is closely related to short circuit evaluation.  These act as
        guards to prevent other operands from being evaluated.  The main
        control structures for this in Scheme are ◊code{if}, ◊code{cond},
        and ◊code{case}.

        ◊sidebar{These seem to have analogues from other languages:
            ◊ul{
                ◊li{◊code{if} is pretty standard.}
                ◊li{◊code{cond} is a bit like ◊code{switch}, but the keys
                are full-blown conditions.  The cases are evaluated top-down
                and the first one to match is used.}
                ◊li{◊code{case} is a sort of shorthand for ◊code{cond} where
                each condition is a ◊code{eqv} against a key.  (This key can
                be any expression, it just needs to pass a structural 
                equivalence test.)}
            }

            Typically, ◊code{case} is used when the number of possible keys
            is small and thus direct matching makes sense.  Otherwise, the
            more general ◊code{cond} is used.
        }
    }

    ◊section[#:title "Recursion"]{
        ◊def[#:term "Recursive Procedure"]{
            A procedure that calls itself.  It does this to solve simpler
            versions of some problem, which are used in the answer to the
            original.
        }

        Recursive procedures typically have two components:
        ◊ol{
            ◊li{A ◊first-use{base case}.  This is used to prevent the
            recursion from continuing forever.  It is the simplest form of
            the problem for which we can give a solution outright.}
            ◊li{A ◊first-use{recursive step}.  In this, we form a solution
            via a simpler form of the original problem.  We must work toward
            the base}
        }

        ◊example{
            Take this sum procedure:

            ◊code-block{
                (define (sum number))
                    (if (zero? number))
                        0
                        (+ number (sum (- number 1)))
            }

            So why does this not recurse forever?
            ◊explanation{This does not continue to recurse because of the
            ◊code{if} used as a control structure.  When ◊code{number} is
            0, the recursive step is not evaluated.}
        }

        ◊section[#:title "Mathematical Induction"]{
            ◊; TODO
        }
    }
}