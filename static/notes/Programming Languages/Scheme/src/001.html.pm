#lang pollen

◊(require "../decoders.rkt")

◊chapter[#:title "Expressions and Values" #:finished "#t"]{
    ◊section[#:title "Values"]{
        Scheme values can be categorized into one of two domains.

        ◊list-rules{
            ◊li{Value ::= SIMPLE | COMPOSITE}
            ◊li{SIMPLE ::= NUMBER | CHAR | BOOLE | SYMBOL | etc.}
            ◊li{COMPOSITE ::= STRING | VECTOR | PAIR | LIST}
        }

        ◊sidebar{
            This funky "::=" symbol means "consists of."
        }

        ◊section[#:title "Characters"]{
            The CHAR domain consists of all keyboard characters.  Scheme uses
            the #\ prefix to distinguish between characters appearing as
            themselves and characters appearing in strings.
        }

        ◊section[#:title "Booleans"]{
            The BOOLE domain consists of two values, ◊code{#t} and ◊code{#f},
            which represent true and false respectively.  Do not confuse these
            with ◊code{#\t} or ◊code{#\f}, which represent characters.
            
            ◊rule{BOOLE ::= #t | #f}
        }

        ◊section[#:title "Symbols"]{
            The symbol domain houses variables.  Variables are names used in
            programs to denote values.

            ◊rule{SYMBOL ::= PECULIAR | NORMAL}
        }

        ◊section[#:title "Procedures"]{
            Sometimes, an algorithm becomes so practiced, that we view it as
            a single operation.  A procedure is an algorithm encapsulate as such.
        }

        ◊section[#:title "Strings"]{
            Strings are sequences of characters enclosed in double quotes.  If a
            double quote or a backslash is to appear in a string, it must be
            escaped with a backslash.
        }

        ◊section[#:title "Lists"]{
            Any sequence of values can be put in a list.  A list is bracketed
            by parenthesis and elements within the list are separated by
            spaces.
        }

        ◊section[#:title "Vectors"]{
            A vector is virtually exactly like a list, just prefixed with the
            ◊code{#} symbol.
        }

        ◊section[#:title "Pairs"]{
            Any two values can be grouped into a pair.  There is not much
            difference between a pair and a two-element list, aside from
            notation.  Items in a pair are separated by the ◊code{.} symbol.
        }
    }

    ◊section[#:title "Expressions"]{
        Algorithms are represented in Scheme using expressions.  The
        algorithm described by an expression usually produces a value.
        Like values, expressions can be divided into several domains.

        ◊rule{EXPRESSION ::= LITERAL | SYMBOL | APPLICATION | STRUCTURE}

        ◊section[#:title "Literals"]{
            Almost any value can be converted to an expression by adding
            a single quote in front of it.  These expressions are called
            literals because their value is found by simply removing the
            quote.
        }

        ◊section[#:title "Symbols and the Global Environment"]{
            Recall that the symbol domain is used to provide a name for
            values.  Scheme provides a few symbols populated in a symbol
            table called the global environment.
        }

        ◊section[#:title "Applications"]{
            An application, or a procedure call, is simply a list of one
            or more expressions.  The first expression is an operator, which
            denotes a procedure.  The rest are operands.

            Scheme uses prefix notation, meaning that the operator comes
            before the operands.  With this format, you do not typically
            need parenthesis, but in Scheme you do.  This is because they
            indicate that a procedure is being called.
        }

        ◊section[#:title "Structures"]{
            Structures, also known as special forms, allow programmers to
            control the flow of evaluation (control structures), the
            visibility of data (block structures), and the contents of
            memory (assignment structure).
        }
    }

    ◊section[#:title "The Scheme Interpreter"]{
        Defining the EXPRESSION and VALUE domains is only ◊em{half} the job of
        specifying a programming language.  We also need to specify a processor
        that can evaluate expressions to produce values.

        A processor can be a physical device, such as a CPU, or it can be a
        virtual device, such as an interpreter or a compiler.  A Scheme
        interpreter has three components:

        ◊ul{
            ◊li{The global environment}
            ◊li{An expression evaluator}
            ◊li{A control loop}
        }

        We will first explore the expression evaluator, because it does the
        work of, well, ◊em{evaluating expressions}.

        ◊section[#:title "The Expression Evaluator"]{
            The evaluator takes 2 inputes:  an expression and an environment,
            which is often the globan environment.  From this, it produces a
            value.  The evaluator does something special for each of the
            expression types.

            ◊rule-list{
                ◊li{For a literal, the evaluator returns the value of the literal.}
                ◊li{For a symbol, the evaluator searches the environment for the
                symbol and returns the associated value.}
                ◊li{For a structure, the evaluator calls a special algorithm defined
                for that structure.}
                ◊li{For an application, the evaluator performs eager evaluation.}
            }
        }

        ◊section[#:title "The Control Loop"]{
            The control loop, also called the ◊first-use[#:acronym "REPL"]{
            read-eval-print loop}, simply waits for an expression to be typed
            onto the keyboard, sends it to the evaluator, and prints the result.
        }

        ◊section[#:title "Definitions"]{
            Values produced by the interpreter are ◊first-use{volatile}, meaning that
            they will disappear from memory if not persisted.  To persist a value, we
            can use a ◊first-use{definition}.

            A definition creates an associated between a symbol and the value produced
            by an expression.  We call these associations ◊first-use{bindings}.

            ◊example{
                ◊repl{
                    ◊in{(define foo 42)}
                    ◊in{foo}
                    ◊out{42}
                }
                ◊explanation{Here, "foo" has been bound to the value produced by the
                expression '42.  ◊em{(Recall that the interpreter infers the literal.)}}
            }
        }
    }
}
