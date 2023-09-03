// Sample data for social media posts and tasks
const socialMediaPosts = [];
const tasks = [];

// Function to display social media posts
function displaySocialMediaPosts() {
    const postsList = document.getElementById("posts-list");

    // Clear the previous list
    postsList.innerHTML = "";

    socialMediaPosts.forEach((post, index) => {
        const postItem = document.createElement("li");
        postItem.textContent = `Post ${index + 1}: ${post}`;
        postsList.appendChild(postItem);
    });
}

// Function to display task assignment features
function displayTaskAssignment() {
    const tasksList = document.getElementById("tasks-list");

    // Clear the previous list
    tasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.textContent = `Task ${index + 1}: ${task.title} (Assigned to: ${task.assignedTo})`;
        tasksList.appendChild(taskItem);
    });
}

// Event listener for posting social media
const postButton = document.getElementById("post-button");
postButton.addEventListener("click", () => {
    const postInput = document.getElementById("post-input");
    const postContent = postInput.value;

    if (postContent.trim() !== "") {
        socialMediaPosts.push(postContent);
        postInput.value = "";
        displaySocialMediaPosts();
    }
});

// Event listener for creating tasks
const taskButton = document.getElementById("task-button");
taskButton.addEventListener("click", () => {
    const taskInput = document.getElementById("task-input");
    const assigneeInput = document.getElementById("assignee-input");
    const taskTitle = taskInput.value;
    const assignedTo = assigneeInput.value;

    if (taskTitle.trim() !== "" && assignedTo.trim() !== "") {
        tasks.push({ title: taskTitle, assignedTo });
        taskInput.value = "";
        assigneeInput.value = "";
        displayTaskAssignment();
    }
});

// Call functions to display initial content
displaySocialMediaPosts();
displayTaskAssignment();
