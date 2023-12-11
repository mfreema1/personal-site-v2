public class Foo {

  private final Frob frob;

  private Foo(Frob frob) {
    this.frob = frob;
  }

  public static Foo create(Bar bar) {
    return new Foo(frob(bar));
  }

  private static Frob frob(Bar bar) {
    // ...
  }
}
