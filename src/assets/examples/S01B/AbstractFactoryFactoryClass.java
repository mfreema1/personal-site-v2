public interface Foo {
  // ...
}

public interface FooFactory {
  Foo createFoo();
}

public interface FooFactoryFactory {
  FooFactory createFooFactory();
}
