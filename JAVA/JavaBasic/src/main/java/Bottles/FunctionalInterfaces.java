package Bottles;

public class FunctionalInterfaces {

    @FunctionalInterface
    public interface Foo {
        String method(String string);
    }

    private String add(String string, Foo foo) {
        return foo.method(string);
    }

    public String tryFunction() {
        Foo foo = parameter -> parameter + " from lambda";
        return add("Message", foo);
    }
}
