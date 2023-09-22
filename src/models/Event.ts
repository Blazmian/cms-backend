export interface ICreateEvent {
    event_name: string
    description: string
    type: string
    place: string
    link: string
    date: Date
    hour: string
    image: Buffer
}