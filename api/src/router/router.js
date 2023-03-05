import express from "express";

import { controllerRecountSentiment } from "../controller/recount_sentiment.controller.js";
import { controllerPoliticalParties } from '../controller/political_parties.controller.js'
import { controllerRetweetSumBySentiment } from "../controller/retweet_sum_sentiment.controller.js";
import { controllerRetweetsSumPoliticalParties } from '../controller/retweet_sum_political_parties.controller.js'
import { controllerSumOfRetweets } from '../controller/sum_of_retweets.controller.js'
import { controllerTotalTweets } from '../controller/total_tweets.controller.js'
import { controllerGetInfo } from '../controller/get_info.controller.js'

export const router = express.Router()

router.get('/recount-sentiment', controllerRecountSentiment)
router.get('/recount-political-parties', controllerPoliticalParties)
router.get('/retweet-sum-sentiment', controllerRetweetSumBySentiment)
router.get('/retweet-sum-political-parties', controllerRetweetsSumPoliticalParties)
router.get('/sum-of-retweets', controllerSumOfRetweets)
router.get('/total-tweets', controllerTotalTweets)
router.get('/get-info', controllerGetInfo)