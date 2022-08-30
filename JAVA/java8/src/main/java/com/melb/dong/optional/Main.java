package com.melb.dong.optional;

import com.melb.dong.models.Student;

public class Main {
    // This method is hard coded which is mocking query from database
    public static Student getStudentByName(String name) {
        return new Student("steven", "male", 26);
        //        return null;
    }

    // business logic
    public static String getStudentGender(String name) {
        return "";
    }

    public static void main(String[] args) {
        System.out.println(getStudentGender("steven"));
    }
}
