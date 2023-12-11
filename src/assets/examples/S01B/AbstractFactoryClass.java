public interface Foo {
  // ...
}

public class Frob implements Foo {
  // ...
}

public interface FooFactory {
  Foo createFoo();
}

public class FrobFactory implements FooFactory {

  @Override
  public Foo createFoo() {
    return new Frob();
  }
}
