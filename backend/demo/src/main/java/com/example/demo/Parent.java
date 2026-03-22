public class Parent {
    private Long id;
    private String first;
    private String last;
    private String email;
    private String password;
    private ArrayList<Child> children;
    private boolean updates;

    public Parent (String first, String last, String email, String password, boolean updates) {
        this.first = first;
        this.last = last;
        this.email = email;
        this.password = password;
        this.children = new ArrayList();
        this.updates = updates;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isUpdates() {
        return updates;
    }

    public void setUpdates(boolean updates) {
        this.updates = updates;
    }
}