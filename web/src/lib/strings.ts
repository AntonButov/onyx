/**
 * Central Russian UI strings. Keys are in English for developer convenience.
 * Used across the app for consistent terminology.
 */
export const S = {
  layout: {
    appName: "CleraDocs",
    appDescription: "Ответы на вопросы по вашим документам",
    initializing: "Инициализация",
    slogan: "Платформа ИИ с открытым исходным кодом",
  },

  sidebar: {
    chat: "Чат",
    agents: "Ассистенты",
    settings: "Настройки",
    search: "Поиск",
    newChat: "Новый чат",
    newSession: "Новый сеанс",
    buildMode: "Режим сборки",
    craft: "Craft",
    searchPlaceholder: "Поиск чатов...",
    searchChats: "Поиск чатов",
    noChats: "Нет чатов",
    recentChats: "Недавние",
    sessions: "Сеансы",
    recentsEmptyMessage:
      "Отправьте сообщение — история чатов появится здесь.",
    exploreAgents: "Обзор ассистентов",
    moreAgents: "Ещё ассистенты",
    projects: "Проекты",
    createProject: "Создать проект",
    newProject: "Новый проект",
    moveToProject: "Переместить в проект",
    admin: "Администрирование",
    adminPanel: "Панель администратора",
    curatorPanel: "Панель куратора",
    closeSidebar: "Свернуть боковую панель",
    failedToMoveChat: "Не удалось переместить чат. Попробуйте снова.",
  },
  adminSidebar: {
    agentsAndActions: "Ассистенты и действия",
    documentsAndKnowledge: "Документы и знания",
    integrations: "Интеграции",
    permissions: "Права доступа",
    organization: "Организация",
    usage: "Использование",
    searchPlaceholder: "Поиск...",
    upgradePlan: "Обновить план",
  },

  admin: {
    // INDEXING_STATUS
    existingConnectorsTitle: "Существующие коннекторы",
    existingConnectorsSidebar: "Существующие коннекторы",
    // ADD_CONNECTOR
    addConnectorTitle: "Добавить коннектор",
    addConnectorSidebar: "Добавить коннектор",
    // DOCUMENT_SETS
    documentSetsTitle: "Наборы документов",
    documentSetsSidebar: "Наборы документов",
    // DOCUMENT_EXPLORER
    documentExplorerTitle: "Обозреватель документов",
    explorerSidebar: "Обозреватель",
    // DOCUMENT_FEEDBACK
    documentFeedbackTitle: "Обратная связь по документам",
    feedbackSidebar: "Обратная связь",
    // AGENTS
    agentsTitle: "Ассистенты",
    agentsSidebar: "Ассистенты",
    // SLACK_BOTS
    slackIntegrationTitle: "Интеграция Slack",
    slackIntegrationSidebar: "Интеграция Slack",
    // DISCORD_BOTS
    discordIntegrationTitle: "Интеграция Discord",
    discordIntegrationSidebar: "Интеграция Discord",
    // MCP_ACTIONS
    mcpActionsTitle: "MCP-действия",
    mcpActionsSidebar: "MCP-действия",
    // OPENAPI_ACTIONS
    openApiActionsTitle: "OpenAPI-действия",
    openApiActionsSidebar: "OpenAPI-действия",
    // STANDARD_ANSWERS
    standardAnswersTitle: "Типовые ответы",
    standardAnswersSidebar: "Типовые ответы",
    // GROUPS
    manageUserGroupsTitle: "Управление группами пользователей",
    groupsSidebar: "Группы",
    // CHAT_PREFERENCES
    chatPreferencesTitle: "Настройки чата",
    chatPreferencesSidebar: "Настройки чата",
    // LLM_MODELS
    languageModelsTitle: "Языковые модели",
    languageModelsSidebar: "Языковые модели",
    // WEB_SEARCH
    webSearchTitle: "Веб-поиск",
    webSearchSidebar: "Веб-поиск",
    // IMAGE_GENERATION
    imageGenerationTitle: "Генерация изображений",
    imageGenerationSidebar: "Генерация изображений",
    // VOICE
    voiceTitle: "Голос",
    voiceSidebar: "Голос",
    // CODE_INTERPRETER
    codeInterpreterTitle: "Интерпретатор кода",
    codeInterpreterSidebar: "Интерпретатор кода",
    // INDEX_SETTINGS
    indexSettingsTitle: "Настройки индекса",
    indexSettingsSidebar: "Настройки индекса",
    // DOCUMENT_PROCESSING
    documentProcessingTitle: "Обработка документов",
    documentProcessingSidebar: "Обработка документов",
    // KNOWLEDGE_GRAPH
    knowledgeGraphTitle: "Граф знаний",
    knowledgeGraphSidebar: "Граф знаний",
    // USERS
    usersAndRequestsTitle: "Пользователи и заявки",
    usersSidebar: "Пользователи",
    // API_KEYS
    serviceAccountsTitle: "Сервисные учётные записи",
    serviceAccountsSidebar: "Сервисные учётки",
    // TOKEN_RATE_LIMITS
    spendingLimitsTitle: "Лимиты расходов",
    spendingLimitsSidebar: "Лимиты расходов",
    // USAGE
    usageStatisticsTitle: "Статистика использования",
    usageStatisticsSidebar: "Статистика",
    // QUERY_HISTORY
    queryHistoryTitle: "История запросов",
    queryHistorySidebar: "История запросов",
    // CUSTOM_ANALYTICS
    customAnalyticsTitle: "Пользовательская аналитика",
    customAnalyticsSidebar: "Аналитика",
    // THEME
    appearanceThemingTitle: "Внешний вид и темы",
    appearanceThemingSidebar: "Внешний вид",
    // BILLING
    plansBillingTitle: "Планы и оплата",
    plansBillingSidebar: "Оплата",
    // INDEX_MIGRATION
    documentIndexMigrationTitle: "Миграция индекса документов",
    documentIndexMigrationSidebar: "Миграция индекса",
    // SCIM
    scimTitle: "SCIM",
    scimSidebar: "SCIM",
    // DEBUG
    debugLogsTitle: "Отладочные логи",
    debugLogsSidebar: "Отладка",
    // DOCUMENTS / PERFORMANCE - empty, prefix-only
    documentsTitle: "",
    documentsSidebar: "",
    performanceTitle: "",
    performanceSidebar: "",
  },

  auth: {
    login: "Вход",
    signUp: "Регистрация",
    logOut: "Выйти",
    signIn: "Войти",
    email: "Email",
    password: "Пароль",
    forgotPassword: "Забыли пароль?",
    createAccount: "Создать аккаунт",
    requestAccess: "Запросить доступ",
    invalidCredentials: "Неверный email или пароль",
    accessDenied: "Доступ запрещён",
    welcomeTo: "Добро пожаловать в",
    tagline: "Платформа ИИ с открытым исходным кодом для работы",
    newToApp: "Впервые здесь?",
    alreadyHaveAccount: "Уже есть аккаунт?",
    authError: "Ошибка аутентификации",
    authErrorDescription: "Возникла проблема при входе.",
    possibleIssues: "Возможные причины:",
    incorrectCredentials: "Неверные или устаревшие учётные данные",
    tempDisruption: "Временный сбой системы аутентификации",
    accessRestrictions: "Ограничения доступа или прав для учётной записи",
    returnToLogin: "Вернуться на страницу входа",
    tryAgainRecommend: "Рекомендуем попробовать снова. При повторении проблемы обратитесь к системному администратору.",
    cloudSupportPrompt: "При повторении проблемы обратитесь в поддержку CleraDocs:",
    sessionExpired: "Сеанс истёк. Войдите снова, чтобы продолжить.",
    logIn: "Войти",
  },
  banner: {
    backendUnavailable: "Сервер сейчас недоступен",
    backendUnavailableDescription:
      "Если это первая настройка или вы только что обновили развёртывание, возможно, сервер ещё запускается. Подождите минуту и обновите страницу. Если не поможет, проверьте настройку сервера или обратитесь к администратору.",
  },

  common: {
    save: "Сохранить",
    cancel: "Отмена",
    delete: "Удалить",
    edit: "Изменить",
    add: "Добавить",
    create: "Создать",
    close: "Закрыть",
    back: "Назад",
    next: "Далее",
    submit: "Отправить",
    loading: "Загрузка...",
    error: "Ошибка",
    success: "Успешно",
    confirm: "Подтвердить",
    search: "Поиск",
    filter: "Фильтр",
    more: "Ещё",
    name: "Название",
    description: "Описание",
    optional: "необязательно",
    required: "обязательно",
    none: "Нет",
    yes: "Да",
    no: "Нет",
    copy: "Копировать",
    copied: "Скопировано",
    share: "Поделиться",
    retry: "Повторить",
  },

  roles: {
    basic: "Базовый",
    admin: "Администратор",
    globalCurator: "Глобальный куратор",
    curator: "Куратор",
    limited: "Ограниченный",
    extPermUser: "Внешний пользователь",
    slackUser: "Пользователь Slack",
    hoverBasic: "Базовые пользователи не могут выполнять действия администратора",
    hoverAdmin: "Администраторы могут выполнять все действия",
    hoverGlobalCurator:
      "Глобальные кураторы могут выполнять действия для всех своих групп",
    hoverCurator: "Роль куратора назначается во вкладке «Группы»",
    hoverSlackUser:
      "Эта роль назначается пользователям, которые используют CleraDocs только через Slack",
  },

  statuses: {
    active: "Активен",
    inactive: "Неактивен",
    invitePending: "Ожидает приглашения",
    requested: "Заявка на доступ",
  },

  chat: {
    placeholder: "Задайте вопрос...",
    placeholderSearch: "Поиск по подключённым источникам",
    placeholderHelp: "Чем могу помочь?",
    listening: "Слушаю...",
    speaking: "Говорит",
    send: "Отправить",
    newChat: "Новый чат",
    shareChat: "Поделиться чатом",
    emptyState: "Начните новый диалог",
    createNewPrompt: "Создать новый шаблон",
    showAll: "Показать все",
    open: "Открыть",
    select: "Выбрать",
    chatShared: "Чат доступен по ссылке",
    shareDescription: "Все текущие и будущие сообщения в этом чате будут доступны по ссылке.",
    private: "Приватный",
    privateDescription: "Только у вас есть доступ к этому чату.",
    yourOrganization: "Ваша организация",
    yourOrganizationDescription: "Любой в вашей организации может просматривать этот чат.",
    done: "Готово",
    createShareLink: "Создать ссылку",
    makePrivate: "Сделать приватным",
    copyLink: "Копировать ссылку",
    shareLinkCopied: "Ссылка скопирована в буфер обмена!",
    shareLinkFailed: "Не удалось создать ссылку",
    chatNowPrivate: "Чат теперь приватный",
    makePrivateFailed: "Не удалось сделать чат приватным",
    welcomePopup: "Добро пожаловать в CleraDocs!",
  },

  settings: {
    title: "Настройки",
    chat: "Чат",
    chats: "Чаты",
    appearance: "Внешний вид",
    personalization: "Персонализация",
    profile: "Профиль",
    fullName: "Имя",
    fullNamePlaceholder: "Ваше имя",
    workRole: "Должность",
    workRolePlaceholder: "Ваша должность",
    colorMode: "Режим цвета",
    chatBackground: "Фон чата",
    dangerZone: "Опасная зона",
    deleteAllChats: "Удалить все чаты",
    personalPreferences: "Персональные настройки",
    defaultModel: "Модель по умолчанию",
    chatAutoScroll: "Автопрокрутка чата",
    defaultAppMode: "Режим приложения по умолчанию",
    memory: "Память",
    referenceStoredMemories: "Использовать сохранённые воспоминания",
    updateMemories: "Обновить воспоминания",
    promptShortcuts: "Шаблоны запросов",
    usePromptShortcuts: "Использовать шаблоны запросов",
    voice: "Голос",
    autoSend: "Автоотправка",
    autoPlayback: "Автовоспроизведение",
    playbackSpeed: "Скорость воспроизведения",
    accounts: "Учётные записи",
    email: "Email",
    password: "Пароль",
    accessTokens: "Токены доступа",
    createAccessToken: "Создать токен доступа",
    createToken: "Создать токен",
    creatingToken: "Создание токена...",
    tokenName: "Название токена",
    tokenValue: "Значение токена",
    expiresIn: "Истекает через",
    selectExpiration: "Выберите срок",
    revokeAccessToken: "Отозвать токен доступа",
    changePassword: "Изменить пароль",
    currentPassword: "Текущий пароль",
    newPassword: "Новый пароль",
    confirmNewPassword: "Подтвердите новый пароль",
    preferencesSaved: "Настройки сохранены",
    searchSettings: "Поиск настроек...",
    neverExpires: "Не истекает",
  },

  errors: {
    generic: "Произошла ошибка",
    notFound: "Не найдено",
    unauthorized: "Требуется авторизация",
  },

  federated: {
    connectYourApps: "Подключите приложения",
    connectDescription:
      "Повысьте качество ответов, разрешив поиск по всем вашим подключённым данным.",
  },

  adminUsers: {
    inviteUser: "Пригласить пользователя",
    requestedAccess: "Заявки на доступ",
    noUsersYet: "Пока нет пользователей",
    inviteStatus: {
      sent: "Письма с приглашениями отправлены.",
      notConfigured:
        "Пользователи приглашены. Почта не настроена — письма не отправлялись.",
      disabled: "Пользователи приглашены. Отправка писем с приглашениями отключена.",
      sendFailed:
        "Пользователи приглашены, но не удалось отправить письма с приглашениями.",
    },
  },

  onboarding: {
    next: "Далее",
    back: "Назад",
    connectLLM: "Подключить языковую модель",
  },
  craft: {
    intro: "Режим сборки",
    getStarted: "Начать",
  },

  misc: {
    noResultsFound: "Ничего не найдено",
    noMoreResults: "Нет больше результатов",
    noChatsOrProjectsYet: "Пока нет чатов или проектов",
    recent: "Недавние",
    recentSessions: "Недавние сеансы",
    addFilter: "Добавить фильтр",
  },
} as const;
