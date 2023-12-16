class FrobberProxy implements Frobber {

  Bogger bogger;
  Gobber gobber;

  @Override
  FrobResult frob(Data data) {
    FrobResult boggerResult = this.bogger.frob(data);
    FrobResult gobberResult = this.gobber.frob(data);

    if (boggerResult.equals(gobberResult)) {
      log.count("bogger-and-gobber-equal");
    } else {
      log.count("bogger-and-gobber-unequal");
    }

    return boggerResult;
  }
}
