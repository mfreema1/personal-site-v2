#lang pollen

◊(require "../decoders.rkt")

◊chapter[#:title "Procedures" #:finished "#t"]{
    ◊section[#:title "Defining and Applying Procedures"]{
        Programmers can define their own procedures using 
        ◊first-use{lambda expressions}.  The body of a lambda expression
        is a ◊first-use{parametrized expression}.

        ◊def[#:term "Parametrized Expression"]{
            A Scheme expression that may contain parameters from some list
            of parameters.  A parametrized expression cannot be evaluated
            until its parameters are evaluated and provided as 
            ◊first-use{arguments}.

            ◊sidebar{This is only true for eagerly-evaluated languages, which
            Scheme is one of.}
        }

        ◊def[#:term "Predicate"]{Any procedure that returns a boolean.}
    }

    ◊section[#:title "The Abstraction Principle"]{
        ◊list-defs{
            ◊def[#:term "Structure"]{
                The structure of a procedure is its body, or the way it is
                represented.
            }

            ◊def[#:term "Function"]{
                The function of a procedure is its purpose, or what it does.
            }

            ◊def[#:term "The Abstraction Principle"]{
                Structure and function should be independent.  One should not
                need to know the structure of a procedure in order to benefit
                from its function.  Function is typically exposed via an 
                ◊first-use{interface} of ◊first-use{constructors} and 
                ◊first-use{selectors}.
            }

            ◊sidebar{
                This might seem a little bit like object-oriented programming, 
                because ◊em{it is}.
            }
        }

        ◊def[#:term "Constructor"]{
            A procedure that creates a compound value from its inputs.
        }

        ◊def[#:term "Selector"]{
            A procedure that returns a specified component of a compound value.
        }

        ◊example{
            A violation of the abstraction principle in Scheme is the way that
            lists and pairs work with the ◊code{cdr} function.

            ◊repl{
                ◊in{(cdr '(a b))}
                ◊out{'(b)}

                ◊in{(cdr '(a . b))}
                ◊out{'b}
            }

            ◊explanation{
                This is because internally, lists are represented as pairs of 
                pairs.  For example, ◊code{'(a b c)} is  
                ◊code{'(a . (b . (c . ())))} to the computer.  Thus, when you
                ask for the second element of the list, you get the tail of 
                the list.
            }
        }
    }

    ◊section[#:title "Polymorphic Procedures"]{
        A procedure that expects its input to be from only one particular
        domain is ◊first-use{monomorphic}.  We can define a polymorphic
        procedure by inverting this:

        ◊def[#:term "Polymorphic Procedure"]{
            A procedure that processes input from a variety of domains.
        }

        ◊list-examples{
            Here are some simple examples of polymorphic functions:

            ◊example{
                ◊code{(define (foo bar) 1)}
                ◊explanation{Any function which does not even look at
                the argument would be polymorphic.}    
            }

            ◊example{
                ◊code{(define (pair val) (cons val val))}
                ◊explanation{Here, the value is not accessed in a way that
                depends on its type.  The ◊code{cons} procedure is also
                polymorphic.}
            }

        }
    
        Scheme also provides some polymorphic equality predicates, such as
        ◊code{eq?}, ◊code{equal?}, and ◊code{eqv?}.  The first tests for
        ◊first-use{phsyical equivalence}, while the second checks for
        ◊first-use{structural equivalence}.

        ◊list-defs{
            ◊def[#:term "Physical Equivalence"]{
                Two objects are physically equivalent if they occupy the same 
                address in memory.  For composite values, they must have been 
                created in the same call to a constructor.
            }

            ◊def[#:term "Structural Equivalence"]{
                Two objects are structurally equivalent if they "look the same."
            }
        }
        
        ◊section[#:title "Recognizers"]{
            ◊def[#:term "Recognition Precidate" #:alt-term "Recognizer"]{
                A predicate which determines if a value belongs to a
                particular domain.  They usually have the form ◊em{domain?},
                such as ◊code{symbol?} or ◊code{number?}.
            }
        }
    }

    ◊section[#:title "Meta-Procedures"]{
        ◊def[#:term "Meta-Procedure" #:alt-term "Higher-Order Procedure"]{
            A procedure that expects some arbitrary function as an input.
            Examples include ◊code{map} and ◊code{apply}.
        }
    }
}
