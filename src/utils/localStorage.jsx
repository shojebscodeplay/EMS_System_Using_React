const employees = [
    {
      id: "emp001",
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          status: "completed",
          title: "Prepare Sales Report",
          description: "Create a detailed sales report for Q1.",
          date: "2025-01-18",
          category: "Sales"
        },
        {
          status: "new",
          title: "Review Team Performance",
          description: "Analyze team performance metrics for the month.",
          date: "2025-01-20",
          category: "HR"
        }
      ]
    },
    {
      id: "emp002",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          status: "in progress",
          title: "Design Marketing Banner",
          description: "Design a promotional banner for the upcoming campaign.",
          date: "2025-01-19",
          category: "Marketing"
        },
        {
          status: "failed",
          title: "Update Social Media Posts",
          description: "Schedule and upload the latest product posts on social media.",
          date: "2025-01-17",
          category: "Marketing"
        }
      ]
    },
    {
      id: "emp003",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          status: "accepted",
          title: "Update Inventory",
          description: "Ensure all inventory data is up to date in the system.",
          date: "2025-01-17",
          category: "Inventory"
        },
        {
          status: "new",
          title: "Organize Storage",
          description: "Reorganize the warehouse storage to improve accessibility.",
          date: "2025-01-20",
          category: "Inventory"
        }
      ]
    },
    {
      id: "emp004",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          status: "failed",
          title: "Conduct Training",
          description: "Provide training for the new interns on company policies.",
          date: "2025-01-20",
          category: "HR"
        },
        {
          status: "completed",
          title: "Recruit New Staff",
          description: "Hire candidates for open positions in the sales team.",
          date: "2025-01-18",
          category: "HR"
        }
      ]
    },
    {
      id: "emp005",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          status: "in progress",
          title: "Test New Software",
          description: "Perform testing on the new software and report bugs.",
          date: "2025-01-16",
          category: "IT"
        },
        {
          status: "accepted",
          title: "Fix System Issues",
          description: "Resolve reported issues in the system backend.",
          date: "2025-01-19",
          category: "IT"
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: "admin001",
      email: "admin@example.com",
      password: "123",
      role: "Administrator"
    }
  ];
  
  export const setLocalStorage = () => {
    // Convert the employees array to a string before saving it
    localStorage.setItem("employees", JSON.stringify(employees));
    // Optionally, you can save admin data as well
    localStorage.setItem("admin", JSON.stringify(admin));
  };
  
  export const getLocalStorage = () => {
    // Retrieve the data from localStorage and parse it back into an object
    const employeesData = localStorage.getItem("employees");
    const adminData = localStorage.getItem("admin");
    
    // Check if data exists and parse it
    return {
      employees: employeesData ? JSON.parse(employeesData) : [],
      admin: adminData ? JSON.parse(adminData) : []
    };
  };
  