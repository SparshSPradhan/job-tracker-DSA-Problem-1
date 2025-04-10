const jobApplications = [
    { company: "Google", role: "SDE Intern", appliedDate: "2025-04-01" },
    { company: "Amazon", role: "Frontend Intern", appliedDate: "2025-03-28" },
    { company: "Meta", role: "Backend Intern", appliedDate: "2025-04-05" },
    { company: "Microsoft", role: "Full Stack Intern", appliedDate: "2025-03-30" },
  ];
  
  // Sort jobs by appliedDate (latest first)
  jobApplications.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
  
  console.log("Sorted Job Applications:");
  console.log(jobApplications);
  