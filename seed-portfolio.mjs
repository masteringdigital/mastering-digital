import mysql from 'mysql2/promise';

const portfolioProjects = [
  {
    projectName: "WristCo",
    clientName: "WristCo",
    category: "E-commerce",
    description: "Custom wristband e-commerce platform with product filtering, inventory management, and seamless checkout experience.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/PZapfxAznKdTImAp.png",
    projectUrl: "#",
    order: 1,
    isActive: true
  },
  {
    projectName: "Addaday",
    clientName: "Addaday",
    category: "E-commerce",
    description: "Premium recovery and wellness product store featuring BioZoom Edge technology with hero-driven design and product showcase.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/awLozdOHvWiwvwbc.png",
    projectUrl: "#",
    order: 2,
    isActive: true
  },
  {
    projectName: "Ramona LaRue by Arianne",
    clientName: "Ramona LaRue by Arianne",
    category: "E-commerce",
    description: "Luxury fashion e-commerce site showcasing hand-painted activewear and resort wear with sophisticated visual design.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/AXILgSsNeuNVKRAD.png",
    projectUrl: "#",
    order: 3,
    isActive: true
  },
  {
    projectName: "Wristband Resources",
    clientName: "Wristband Resources",
    category: "E-commerce",
    description: "B2B wristband supplier platform with product comparison, bulk ordering, and customization options for events and businesses.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/lMtQnEkyJbmlKGwd.png",
    projectUrl: "#",
    order: 4,
    isActive: true
  },
  {
    projectName: "T&S Impact Windows",
    clientName: "T&S Impact Windows",
    category: "Home Services",
    description: "Lead generation website for South Florida windows and doors company with quote request form, project gallery, and service details.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/loHMmnTbzGmHidyU.png",
    projectUrl: "#",
    order: 5,
    isActive: true
  },
  {
    projectName: "Pink Papyrus",
    clientName: "Pink Papyrus",
    category: "E-commerce",
    description: "Vibrant pet accessories brand with hero section, product categorization, and lifestyle imagery showcasing dog and cat products.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/GoojbNsviXOdbHsg.png",
    projectUrl: "#",
    order: 6,
    isActive: true
  },
  {
    projectName: "SEEQ",
    clientName: "SEEQ",
    category: "E-commerce",
    description: "Clear protein supplement brand with bold color-coded product showcase, subscription options, and flavor variety display.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663316492277/rpJEebOTygTipTei.png",
    projectUrl: "#",
    order: 7,
    isActive: true
  }
];

async function seedPortfolio() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  
  try {
    for (const project of portfolioProjects) {
      const query = `
        INSERT INTO portfolio_items 
        (projectName, clientName, category, description, imageUrl, projectUrl, \`order\`, isActive, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
      `;
      
      await connection.execute(query, [
        project.projectName,
        project.clientName,
        project.category,
        project.description,
        project.imageUrl,
        project.projectUrl,
        project.order,
        project.isActive ? 1 : 0
      ]);
      
      console.log(`✓ Added: ${project.projectName}`);
    }
    
    console.log("\n✅ All portfolio projects added successfully!");
  } catch (error) {
    console.error("❌ Error seeding portfolio:", error);
  } finally {
    await connection.end();
  }
}

seedPortfolio();
