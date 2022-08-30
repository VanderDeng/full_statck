package com.melb.dong.stream;

import com.melb.dong.models.Student;

import java.util.Collections;
import java.util.List;


public class Main {
    public static List<Student> getStudentsByGender(String gender) {
        return List.of(new Student("Lisa", "female", 25), new Student("Lily", "female", 25), new Student("XiaoHong", "female", 26));
    }

    public static List<String> getStudentsNamesByGender(String gender) {
        return Collections.EMPTY_LIST;
    }
    public static void main(String[] args) {
        System.out.println(getStudentsNamesByGender("female"));
        int [] a = {1,3,5};
        Array
    }
}
