@RestController
public class ParentController {
    private final ParentRepository parentRepo;
    private final ChildRepository childRepo;

    public ParentController(ParentRepository parentRepo, ChildRepository childRepo) {
        this.parentRepo = parentRepo;
        this.childRepo = childRepo;
    }

    @PostMapping("/parent")
    public Parent createParent(@RequestBody Parent parent) {
        return parentRepo.save(parent);
    }

    @PostMapping("/parent/{id}/child")
    public Child addChild(@PathVariable Long id, @RequestBody Child child) {
        Parent parent = parentRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Parent not found"));
        child.setParent(parent);
        parent.getChildren().add(child);
        return childRepo.save(child);
    }

    @GetMapping("/parents")
    public List<Parent> getParents() {
        return parentRepo.findAll();
    }

    @GetMapping("/parent/{id}/children")
    public List<Child> getChildren(@PathVariable Long id) {

        Parent parent = parentRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Parent not found"));

        return parent.getChildren();
    }
}