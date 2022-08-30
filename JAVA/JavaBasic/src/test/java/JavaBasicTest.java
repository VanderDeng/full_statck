import Bottles.JavaBasic;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class JavaBasicTest {

    private JavaBasic javaBasic;

    @BeforeEach
    void setUp() { javaBasic = new JavaBasic();}

    @Test
    void useOptional(){ javaBasic.useOptional();}

    @Test
    void generateStream(){javaBasic.generateStream();}


}
