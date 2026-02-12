CREATE TABLE `delayed_jobs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`job_type` varchar(50) NOT NULL,
	`payload` text NOT NULL,
	`scheduled_for` timestamp NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'pending',
	`attempts` int NOT NULL DEFAULT 0,
	`last_error` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`completed_at` timestamp,
	CONSTRAINT `delayed_jobs_id` PRIMARY KEY(`id`)
);
