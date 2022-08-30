package Bottles;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

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
        System.out.println(result);
        a = Optional.empty();
        int anotherResult = a.orElseGet(() -> getValue());
        System.out.println(anotherResult);
    }

    public void generateStream() {
        List<String> strings = List.of("abc", "", "bc", "efg", "abcd", "", "jkl");
        List<String> filtered = strings.stream().
                filter(s -> !s.isEmpty()).
                collect(Collectors.toList());
        filtered.forEach(System.out::println);
    }

    public void mapExample() {
        List<Integer> numbers = List.of(3, 2, 2, 3, 7, 3, 5); // 获取对应的平方数
        List<Integer> squaresList = numbers.stream()
                .distinct()
                .map(i -> i * i)
                .collect(Collectors.toList());

        AtomicInteger count = new AtomicInteger();
        squaresList.forEach(i -> count.getAndIncrement());
    }

    public String merge(int high, int low) {
        List<String> results = new ArrayList<>();
        for (int index = high; index >= low; index--) {
            results.add("test " + index);
        }
        return String.join("\n", results);

    }

    public String enhancedMerge(int high, int low){
        return IntStream.rangeClosed(low,high)
                .mapToObj(i -> "test" + (high -i + low))
                .collect(Collectors.joining("\n"));
    }


    public static void main(String[] args) {
        forEach();
    }
}
