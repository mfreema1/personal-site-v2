public class FooFactory {

  public static Foo createFoo(Bar bar) {
    return new Foo(frob(bar));
  }

  public class Foo {

    private final Frob frob;

    private Foo(Frob frob) {
      this.frob = frob;
    }
  }
}
