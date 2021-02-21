function getGuideSidebar() {
    return [
      {
        text: 'Introduction',
        children: [
          { text: 'What is VitePress?', link: '/index' },
          { text: 'Vue3', link: '/vue3/index' },
          { text: 'JsNote', link: '/jsnote/index' },
        ]
      },
    ]
}
module.exports = {
    title: '笔记',
    description: 'Just playing around.',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
            {
                text: 'Note',
                link: '/note/index',
                activeMatch: '^/note/'
            },
            {
              text: 'Vue3',
              link: '/vue3/index',
              activeMatch: '^/vue3/'
            }
        ],
        sidebar: {
            '/vue3': getVue3Config(),
            '/note': getNoteConfig(),
            '/': getIndexConfig(),
        },
    }
    
}


function getIndexConfig() {
    return [
        {
            text: 'Introduction',
            children: [
                { text: 'What is VitePress?', link: '/index' },
            ]
        },
    ]
}

function getVue3Config() {
    return [
        {
            text: 'reactivity',
            children: [
                { text: 'Vue3', link: '/vue3/index' },
            ]
        },
    ]
}
function getNoteConfig() {
    return [
        {
            text: 'Note',
            children: [
                { text: 'note', link: '/note/index' },
            ]
        },
    ]
}