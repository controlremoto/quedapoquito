// src/config/timings.ts

// These are the variables you mentioned.
// They can come later from API, CMS, env, etc.

export const opacityStartTime = new Date("2022-03-11T12:00:00-03:00");
export const opacityEndTime = new Date("2026-03-11T23:59:00-03:00");
//export const opacityEndTime = new Date("2025-12-11T16:29:00-03:00");

// First countdown end time (the one that triggers the reveal)
export const countDownEndTime = new Date("2026-03-11T12:00:00-03:00");
//export const countDownEndTime= new Date("2025-12-11T16:25:00-03:00");

// Second cycle – after first countdown finishes and new image shows
export const nextCountDownEndTime = new Date("2030-03-11T12:00:00-03:00");
