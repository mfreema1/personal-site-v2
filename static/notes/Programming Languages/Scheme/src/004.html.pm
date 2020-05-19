#lang pollen

◊(require "../decoders.rkt")

◊chapter[#:title "Data Control"]{
    ◊def[#:term "Information Hiding Principle"]{
        Information should only be made available on a need-to-know basis.
        In order to prevent unwanted information access, we must privatize
        or encapsulate certain data.
    }

    ◊section[#:title "Procedure Blocks"]{
        Use of the ◊code{define} procedure may be nested to allow for new
        bindings in the environment.  Variables may be either
        ◊first-use{local} or ◊first-use{global}.

        ◊example{
            ◊code-block{
                (define (foo)
                    (define pi (acos -1))
                    pi)
            }

            ◊explanation{
                Here, ◊code{pi} is scoped for the following
                expression.  The use of ◊code{define} like this is called a
                ◊first-use{procedure block}.  The definitions may be chained
                together and the last expression is used as the return value.
            }
        }

        ◊def[#:term "Local Variable"]{
            A variable with a non-global scope.  It is only valid in the
            block where it was defined or any contained scope.
        }

        ◊def[#:term "Global Variable"]{
            A variable that is declared at the top level and is thus available
            in all scopes.
        }

        We prefer local variables over global variables based on the 
        ◊first-use{locality principle}:

        ◊def[#:term "Locality Principle"]{
            Scopes should be as small as possible for the sake of readability.
        }
    }

    ◊section[#:title "The Environment Model of Eager Evaluation"]{
        
    }
}