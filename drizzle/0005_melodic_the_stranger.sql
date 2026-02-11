CREATE TABLE `fitd_leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`reportType` enum('marketing-audit','seo-snapshot','ai-visibility') NOT NULL,
	`businessName` varchar(255) NOT NULL,
	`websiteUrl` varchar(500) NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`industry` varchar(100) NOT NULL,
	`primaryService` varchar(255),
	`targetLocation` varchar(255),
	`crmContactId` varchar(255),
	`reportDeliveryStatus` enum('pending','sent','failed') NOT NULL DEFAULT 'pending',
	`reportDeliveryDate` timestamp,
	`thankYouPageViewed` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `fitd_leads_id` PRIMARY KEY(`id`)
);
