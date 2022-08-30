# Java Basic

## Java History


**两个优点**
1. 写一次，run everywhere
    Run在JVM上

2. Gabbage collection
    避免了内存泄漏（没写好还是会存在内存泄漏）

**Java 8 - Java 17改进**

## Java Roadmap

![java roadmap](/roadmap.png)

多线程在澳洲找工作和实际使用中出现频率不高

其中使用场景比较多的包括：

Streams,Collection,Serialization, Build Tools, Spring, Spring Boot, Logging(能帮助debug的log)

## Development Environment
**Java 17**
本期开发使用

**Intellij IDEA**
使用Analyze->Inspect Code检查代码

**Google Java Style Guide**
格式化代码

## How does Java work
源代码->编译->Byte code->JVM上运行-><-Operating system
JDK包含JRE包含JVM
![java roadmap](/JVM.png)

Baeldung
https://www.baeldung.com/

JDK文档
https://docs.oracle.com/en/java/javase/17/docs/api/

推荐Java阅读
群里资料

## Java 语法
### Variables and Types
#### All Primitives in Java
- byte
- short
- int
- long
- float
- double
- char
- boolean

#### Array
写算法的时候才常用，不推荐实际项目中使用
实际项目中推荐使用List<>
Java 是面向对象的语言，实际项目中希望list of sth更有意义，但是数组有限制而且表示的意义不清晰

### Conditions
条件越多，程序复杂度越高。

### Loop
for, while, forEach

``` java
public void forEach() {
        int[] primes = {2, 3, 5, 7, 11, 13};

        for (int p : primes) {
            System.out.println(p);
        }

        List.of(2, 3, 5, 7, 11, 13).forEach(System.out::println);
        List.of(2, 3, 5, 7, 11, 13).forEach(i -> System.out.println(i));

        Arrays.stream(primes).forEach(System.out::println);
    }
```
### Class

面向对象
*Always override hashCode when you override equals*

Class Object(JDK)
面试：具体项目中或者业务相关的class
看JDK上的equals和hashcode（重写hashcode）
***作业一***
Why do we have to override the hashCode() method when we override equals()?

Because the hashCode values of two equal objects must be equal. If the equals method determines that two objects are equal, then the hashCode values of the two objects are also equal.

If the hashCode() method is not overridden when the equals() method is overridden, the equals method may determine that the two objects are equal, but the hashCode values are not equal.

Summarize :
The equals method judges that two objects are equal, and the hashCode values of the two objects are also equal.
Two objects have the same hashCode value, they are not necessarily equal (hash collision).



Class name必须是名词，对应的function name，method name.

### Methods and FUnctions
public private protected
建议先加private再根据场景改public

**protected 场景**
默认是protected，一般会限制在package里。

*Minimisse the accessibility of classes and members*

**method/function name必须是动词或者动词加名词**

### String
 **Immutable**创建出了以后无法改变
需要熟悉String的相关操作：indexOf, subString, concat,etc.
正则表达式：校验，查找

*Be ware the performance of string concatenation*
注意连接string的性能，使用“+”会影响性能
其他常用包括split

### Java Collections Framework
![](/collection.png)


实际使用的是紫色的class
其中会包含一些算法，比如sort

面试常问：
*LinkedList vs ArrayList*
***作业二***

Set: 当需要返回所有都是unique
Deque: 需要使用双端队列的时候，会使用linkedlist
ArrayList: 允许有重复数据

### Map
场景是因为像字典，查询更快，用空间换时间

*Item64: Refer to objects by their interface*
定义的部分（等号左边）是interface
``` java
// Good 
Set<Book> books = new LinkedHashSet<>();
Map<String, String> authorBookMap = new HashMap<>();
List<String> sentences = new ArrayList<>();
```

定义的时候就是用class，不灵活
```
// Bad - uses class as type!
LinkedHashSet<Book> books = new LinkedHashSet<>();
HashMap<String, String> authorBookMap = new HashMap<>();
ArrayList<String> sentences = new ArrayList<>();
```

### 序列化和反序列化
I/O操作
序列化：在硬盘上传输，或网络层上传输。
反序列化：嫁给你二进制转化为对象读取
场景：数据库读写，网络传输

**I/O操作通常是系统中操作最慢的地方**
log数量多少也会影响系统的性能

影响开发程序中：
1.自己调用其他的api，要加timeout，并且考虑性能问题
2.数据库读写，操作性能，所以尽可能减少对数据库访问的次数

### Java 8 lambda
在String中用的比较多

### Java 9 Optional
避免空指针异常
三种构造方式：
Optional.of(obj),Optional.ofNull(obj),Optional.empty()

存在即返回

*TIPS:使用 Optional 时尽量不直接调用Optional.get() 方法, Optional.isPresent()更应该被视为一个私有方法, 应依赖于其他像 Optional.orElse(),Optional.orElseGet(), Optional.map() 等这样的方法.*

```java
    private int getValue() {
        System.out.println("Called here");
        return 20;
    }

    public void useOptional() {
        Optional<Integer> a = Optional.of(10);
        int result = a.orElse(getValue());
        int anotherResult = a.orElseGet(() -> getValue());
    }
```
a.orElse(getValue())
当写一个函数在orElse里，不管a的value，一定先回跑一边里面的函数
但是orElseGet()只有在a是empty的情况下才会跑里面的函数

举例：
```java
    private int getValue() {
        System.out.println("Called here");
        return 20;
    }

    public void useOptional() {
        Optional<Integer> a = Optional.of(10);
        int result = a.orElse(getValue());
        a = Optional.empty()
        int anotherResult = a.orElseGet(() -> getValue());
    }
```

### Java 8 Stream
将需要处理的元素集合看作一种流，流在管道上传输，并且可以在管道节点中处理，比如排序，筛选等。

Example:
```java
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
    }
```
map:映射每个元素对应的结果
filter通过设置条件过滤出元素
limit：获取指定数量的流
sorted：排序
Collectors:实现了归约操作，将流转化为集合和聚合元素
统计：一些产生统计结果的收集器也很有用，主要用于int,double,long

*Item46: Prefer side-effect-free functions in streams*
*Item47: Prefer Collection to Stream as a return type*

Example:
``` java
 public void mapExample() {
        List<Integer> numbers = List.of(3, 2, 2, 3, 7, 3, 5); // 获取对应的平方数
        List<Integer> squaresList = numbers.stream()
                .distinct()
                .map(i -> i * i)
                .collect(Collectors.toList());

        AtomicInteger count = new AtomicInteger();
        squaresList.forEach(i -> count.getAndIncrement());
    }
```

**How to rewrite the following code**



```java
    public String merge(int high, int low) {
        List<String> results = new ArrayList<>();
        for (int index = high; index >= low; index--) {
            results.add("test " + index);
        }
        return String.join("\n", results);
        
    }
```

Solution:
```java
    public String enhancedMerge(int high, int low){
        return IntStream.rangeClosed(low,high)
                .mapToObj(i -> "test" + (high -i + low))
                .collect(Collectors.joining("\n"));
    }
```