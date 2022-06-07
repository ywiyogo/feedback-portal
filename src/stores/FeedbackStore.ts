// Reference https://svelte.dev/examples/writable-stores

import { type Writable, writable } from "svelte/store";
import { supabase } from "../supabase.ts";

// A list of the object entries
export const feedbackList: Writable = writable([]);

export interface IFeedback {
	title: string;
	description: string;
	object_id: number;
	media_src: string;
	date: Date;
	reviewed: boolean;
	user_id: string;
	city: string;
}

// Load and assign the fetched data to the global variable
export const loadFeedbacks = async (isUser: boolean = false) => {
	console.log("load FeedbackList")
	if (isUser) {
		const { data, error } = await supabase.from('feedbacks').select();
		if (error) {
			return console.error(error);
		} else {
			feedbackList.set(data);
		}
		console.log("Supabase data")
		console.log(data)
	} else {
		const { data, error } = await supabase.from('feedbacks').select().eq('reviewed', true);
		if (error) {
			return console.error(error);
		} else {
			console.log("Set list data")
			console.log(feedbackList)
			feedbackList.set(data);
			console.log("Data set")
			console.log(feedbackList)
		}
		console.log("data")
		console.log(data)
	}

	console.log("feedbackList")
	console.log(feedbackList)
}


export const addFeedback = async (feedback: any) => {
	const { data, error } = await supabase.from('feedbacks').insert(feedback);
	if (error) {
		return console.error(error);
	}
	// pass a callback function to the update function
	feedbackList.update((cur: any) => [...cur, data[0]]);
};

export const deleteFeedback = async (id: any) => {
	const { error } = await supabase.from('feedbacks').delete().match({ id });
	if (error) {
		return console.error(error);
	}
	feedbackList.update((feedbackList: Writable) => feedbackList.filter((feedback: any) => feedback.id !== id));
};

export const toggleFeedbackReviewed = async (id: any, currState: boolean) => {
	const { error } = await supabase.from('feedbacks').update({ reviewed: !currState }).match({ id })
	if (error) {
		return console.error(error);
	}
	feedbackList.update((feedbackList: Writable) => {
		let index = -1;
		for (let i = 0; i < feedbackList.length; i++) {
			if (feedbackList[i].id === id) {
				index = i;
				break;
			}
		}
		if (index !== -1) {
			feedbackList[index].completed = !feedbackList[index].completed;
		}
		return feedbackList;
	});
};

export const getFeedbackById = async (id: string) => {
	try {
		console.log("getFeedbackById")
		if (feedbackList.length == 0) {
			// get the data from DB if doesn't exist
			console.log("get the data from DB if doesn't exist")
			const { data, error } = await supabase.from('feedbacks').select().eq('id', id);
			if (error) {
				return console.error(error);
			} else {
				feedbackList.set(data);
			}
		}
		console.log(feedbackList)
		feedbackList.update((feedbackList: Writable) => {
			let index = -1;
			for (let i = 0; i < feedbackList.length; i++) {
				if (feedbackList[i].id === id) {
					index = i;
					break;
				}
			}
			if (index !== -1) {
				feedbackList[index].completed = !feedbackList[index].completed;
			}
			return feedbackList;
		});

	} catch (err) {
		console.error(err);
		return null;
	}
};