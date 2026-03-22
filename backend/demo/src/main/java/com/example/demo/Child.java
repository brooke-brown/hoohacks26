import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
public class Child {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String first;
    private String last;
    private int age;
    private int grade;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Parent parent;


    public Child() {}

    public Child(String first, String last, int age, int grade) {
        this.first = first;
        this.last = last;
        this.age = age;
        this.grade = grade;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public String getFirst() {
        return first;
    }

    public void setFirst(String first) {
        this.first = first;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
    }
}