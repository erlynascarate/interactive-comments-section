const data = {
    currentUser: {
        image: {
            png: './avatars/image-juliusomo.png',
        },
        username: 'juliusomo',
    },
    comments: [
        {
            id: 1,
            content: `Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.`,
            createdAt: new Date('04/14/2023'),
            score: 12,
            user: {
                image: {
                    png: './avatars/image-amyrobson.png',
                },
                username: 'amyrobson',
            },
            replies: [],
        },
        {
            id: 2,
            content: `Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!`,
            createdAt: new Date('05/01/2023'),
            score: 5,
            user: {
                image: {
                    png: './avatars/image-maxblagun.png',
                },
                username: 'maxblagun',
            },
            replies: [
                {
                    id: 3,
                    content: `If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.`,
                    createdAt: new Date('05/08/2023'),
                    score: 4,
                    replyingTo: 'maxblagun',
                    user: {
                        image: {
                            png: './avatars/image-ramsesmiron.png',
                        },
                        username: 'ramsesmiron',
                    },
                },
                {
                    id: 4,
                    content: `I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.`,
                    createdAt: new Date('05/13/2023'),
                    score: 2,
                    replyingTo: 'ramsesmiron',
                    user: {
                        image: {
                            png: './avatars/image-juliusomo.png',
                        },
                        username: 'juliusomo',
                    },
                },
            ],
        },
    ],
}

export default data
