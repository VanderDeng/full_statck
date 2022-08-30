# Java_02

## 异常处理 Exception handling


**Example**
``` java
public String readFirstLineFromFile(String path) throws IOException {

  FileReader fr = new FileReader(path);
  BufferedReader br = new BufferedReader(fr);
  try {
    return br.readLine();
  } finally {
    try {
      br.close();
    } catch (Exception e) {
      //...
    }
    fr.close();
  }
}
```
注意br.close()也会抛出异常，导致后面的fr.close()不会执行

*Item 9: Prefer try-with-resources to try-finally*

- RuntimeException: NullPointException, ClassCastException等
- CheckedException: I/OException, ClassNotFoundException等

企业应用问题做法：
***在合适的层级处理异常***

## Log

**log分为多个level**
- Fatal	
One or more key business functionalities are not working and the whole system doesn’t fulfill the business functionalities.
- Error	
One or more functionalities are not working, preventing some functionalities from working correctly.
- Warn	
Unexpected behavior happened inside the application, but it is continuing its work and the key business features are operating as expected.
- Info	
An event happened, the event is purely informative and can be ignored during normal operations.
- Debug	
A log level used for events considered to be useful during software debugging when more granular information is needed.
- Trace	
A log level describing events showing step by step execution of your code that can be ignored during the standard operation, but may be useful during extended debugging sessions.


## Object Oriented Programming

### Encapsulation 封装
把数据和方法封装起来

### Inheritance 继承
减少重复代码

### Polymorphism 多态
method overriding
method overloading

### Abstraction 抽象
不能为了抽象而抽象，简单的重复好过错误的抽象

## Abstract Class and interface
面试常考：
abstract class User{}
interface Transaction{}
*作业一*


**Functional Interfaces**
Predicate<T>

Supplier

Consumers

Function


## Tips

*Item 17:Minimise mutablility*
*Item 18:Favour composition over inheritance*
*Item 19:Konw and use the libraries.*

## 单元测试

type:
- Query


- Command

private 原则上通常不写测试
除非，它很重要

写好一个单元测试：
1.定义好场景
2.一定要asssert


## Principles we need to know

**SOLID**
- Single responsibility
- Open/closed
- Liskov substitution
- Interface segregation
- Dependency inversion



## 代码重构

**bottles代码练习**
重构并添加新需求
新需求：
```java
  @Test
  public void test7_6() {
    String versedLyrics = """
      7 bottles of beer on the wall, 7 bottles of beer.
      Take one down and pass it around, 1 six-pack of beer on the wall.
      1 six-pack of beer on the wall, 1 six-pack of beer.
      Take one down and pass it around, 5 bottles of beer on the wall.""";
    assertEquals(versedLyrics, new Bottles().verses(7, 6));
  }
  ```
*作业二*
