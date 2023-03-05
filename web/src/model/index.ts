export interface PoliticalPartiesTweets {
    'class_name': string,
    'recount': number,
    'color': string,
    'border_color': string
}

export interface RecountSentiment {
    sentiment_type: string,
    recount: number
}

export interface SumRetweetsSentiment {
    'sentiment_type': string,
    'recount': number,
}

export interface RetweetSumPoliticalParties {
    'class_name': string,
    'recount': number
}

export interface PoliticalParties {
    name: string,
    title: string,
    png: string,
    height: number,
    width: number,
    link: string,
}

export interface BarConfig {
  labels: string[],
  values: number[],
  title?: string,
  color?: string[] | string,
  bColor?: string[] | string,
  axis?: "x" | "y" | undefined
}

export interface PieConfig {
    labels: string[],
    values: number[],
    title?: string,
    color?: string[] | string,
    bColor?: string[] | string,
    axis?: "x" | "y" | undefined
}

export interface TotalTweets {
    total_tweets: number
}

export type Positive = {
    positive: string
}

export type Negative = {
    negative: string
}

export type Neutral = {
    neutral: string
}