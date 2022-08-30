package Bottles;

public class Bottles {
    public static String verse(int i) {
        if (i == 1) {
            return i + " bottle of beer on the wall, " + i + " bottle of beer.\n" +
                    "Take it down and pass it around, no more bottles of beer on the wall.";
        } else if (i > 1) {
            return i + " bottles of beer on the wall, " + i + " bottles of beer.\n" +
                    "Take one down and pass it around, " + (i - 1) +
                    ((i - 1) == 1 ? " bottle of beer on the wall." : " bottles of beer on the wall.");
        } else {
            return "No more bottles of beer on the wall, no more bottles of beer.\n" +
                    "Go to the store and buy some more, 99 bottles of beer on the wall.";
        }
    }

    public static String verses(int i, int i1) {
        String results = "";
        for (int j = i; j > i1; j--) {
            results = results + verse(j) + "\n" + "\n";
        }
        return results + verse(i1);
    }
//
//    public String verses(int high, int low){
//
//    }

    public static String song() {
        return verses(99, 0);
    }
}
