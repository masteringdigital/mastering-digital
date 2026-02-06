CREATE TABLE `page_content` (
	`id` int AUTO_INCREMENT NOT NULL,
	`pageId` varchar(100) NOT NULL,
	`sectionId` varchar(100) NOT NULL,
	`contentKey` varchar(100) NOT NULL,
	`contentValue` text NOT NULL,
	`contentType` varchar(50) NOT NULL DEFAULT 'text',
	`displayOrder` int NOT NULL DEFAULT 0,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `page_content_id` PRIMARY KEY(`id`)
);
