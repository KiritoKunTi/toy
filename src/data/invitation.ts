// import musicSrc from "../assets/music/test1.mp3"
import musicSrc from "../assets/music/Kazybek_Kuraiysh_Senimenen.mp3"

export type RsvpOption = {
    label: string
    value: "ACCEPT" | "ACCEPT_WITH_PAIR" | "NOT_ACCEPT"
}

export type TimelineItem = {
    id: string
    time: string
    title: string
    description: string
}

export type InvitationData = {
    monogram: string
    couple: {
        partnerOne: string
        partnerTwo: string
        connector: string
    }
    eventLabel: string
    date: {
        display: string
        short: string
        monthLabel: string
        year: string
        day: number
        iso: string
    }
    time: string
    hosts: {
        label: string
        names: string
    }
    venue: {
        name: string
        city: string
        address: string
        mapsUrl: string
        embedUrl: string
    }
    welcome: {
        greetingLines: string[]
        inviteLead: string
        inviteBody: string
    }
    story: {
        title: string
        paragraphs: string[]
    }
    dressCode: {
        title: string
        body: string
        note: string
    }
    timeline: TimelineItem[]
    rsvp: {
        title: string
        hint: string
        options: RsvpOption[]
        submitLabel: string
    }
    finale: {
        line: string
    }
    music: string
    countdownTarget: string
}

export const invitation: InvitationData = {
    monogram: "Д & А",
    couple: {
        partnerOne: "Думан",
        partnerTwo: "Ақсауле",
        connector: "мен",
    },
    eventLabel: "Үйлену тойы",
    date: {
        display: "31 қазан 2026",
        short: "31.10.2026",
        monthLabel: "Қазан",
        year: "2026",
        day: 31,
        iso: "2026-10-31",
    },
    time: "18:00",
    hosts: {
        label: "Той иелері",
        names: "Кенжебек — Қаламқас",
    },
    venue: {
        name: "Grand Royal",
        city: "Тараз қаласы",
        address: "Төле би даңғылы, 82",
        mapsUrl: "https://go.2gis.com/VZ35Z",
        embedUrl:
            "https://www.openstreetmap.org/export/embed.html?bbox=71.3445%2C42.8985%2C71.3545%2C42.9045&layer=mapnik&marker=42.901444%2C71.34958",
    },
    welcome: {
        greetingLines: [
            "Құрметті ағайын-туыс,",
            "құда-жекжат, нағашы-жиендер,",
            "дос-жарандар, көршілер",
            "және әріптестер!",
        ],
        inviteLead: "Сіздерді ұлымыз",
        inviteBody:
            "келініміздің үйлену тойына арналған ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!",
    },
    story: {
        title: "Біздің тарих",
        paragraphs: [
            "Екі жүрек бір жолда тоғысып, махаббат пен сыйластыққа толы жаңа өмір бастамақ.",
            "Думан мен Ақсауле сіздерді осы қуанышты сәтке куә болуға шақырады.",
        ],
    },
    dressCode: {
        title: "Киім үлгісі",
        body: "Кештің атмосферасына сай әдемі, сәнді киімді таңдауыңызды сұраймыз.",
        note: "Жылы реңктер мен классикалық стиль ұсынылады.",
    },
    timeline: [
        {
            id: "welcome",
            time: "17:30",
            title: "Қабылдау",
            description: "Қонақтарды қарсы алу",
        },
        {
            id: "ceremony",
            time: "18:00",
            title: "Салтанат",
            description: "Негізгі той басталуы",
        },
        {
            id: "dinner",
            time: "19:00",
            title: "Дастархан",
            description: "Ас мәзірі мен құттықтаулар",
        },
        {
            id: "celebration",
            time: "21:00",
            title: "Той",
            description: "Би мен мерекелік кеш",
        },
    ],
    rsvp: {
        title: "Тойға келетініңізді растауыңызды сұраймыз",
        hint: "Жұбыңызбен келсеңіз, есімдеріңізді бірге жаза кетіңіз",
        options: [
            { label: "Келемін", value: "ACCEPT" },
            { label: "Жұбыммен келемін", value: "ACCEPT_WITH_PAIR" },
            { label: "Келе алмаймын", value: "NOT_ACCEPT" },
        ],
        submitLabel: "Жауапты жіберу",
    },
    finale: {
        line: "Келіңіздер, қадірлі қонағымыз болыңыздар!",
    },
    music: musicSrc,
    countdownTarget: "2026-10-31T18:00:00+05:00",
}
