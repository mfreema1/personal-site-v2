public class Foo {

  private final Frob frob;

  public Foo(Bar bar) {
    this.frob = frob(bar);
  }

  private static Frob frob(Bar bar) {
    // ...
  }
}
