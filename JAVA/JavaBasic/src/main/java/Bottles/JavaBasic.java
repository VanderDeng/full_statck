package Bottles;

import javax.swing.text.html.Option;
import java.util.*;
import java.util.stream.Collector;
import java.util.Arrays;

public class JavaBasic {

    public static void forEach() {
        int[] primes = {2, 3, 5, 7, 11, 13};

        for (int p : primes) {
            System.out.println(p);
        }

        List.of(2, 3, 5, 7, 11, 13).forEach(System.out::println);
        List.of(2, 3, 5, 7, 11, 13).forEach(i -> System.out.println(i));

        Arrays.stream(primes).forEach(System.out::println);
    }

    private int getValue() {
        System.out.println("Called here");
        return 20;
    }

    public void useOptional() {
        Optional<Integer> a = Optional.of(10);
        int result = a.orElse(getValue());
        int anotherResult = a.orElseGet(() -> getValue());
    }


    public static void main(String[] args) {
        forEach();
    }
}
