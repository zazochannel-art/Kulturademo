const supabaseConfig = {
  url: "https://jxlqrbpqufrouwujboxi.supabase.co",
  anonKey: "sb_publishable_i9CCh1u2dhO11QMPmTucRA_93UUziQ6",
  table: "kultura_admin_state",
  rowId: "main",
  profileBucket: "profile-images",
};

function createSupabaseClient() {
  const hasConfig = supabaseConfig.url.startsWith("https://") && supabaseConfig.anonKey.length > 20;
  if (!hasConfig || !window.supabase) return null;

  try {
    return window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey, {
      auth: {
        autoRefreshToken: true,
        detectSessionInUrl: true,
        persistSession: true,
      },
    });
  } catch (error) {
    console.warn("Supabase nu a putut fi initializat.", error);
    return null;
  }
}

const supabaseClient = createSupabaseClient();
const dictionaries = {
  ro: {
    brand_subtitle: "Organizare interna",
    login_eyebrow: "Acces echipa",
    login_title: "Logare in panoul organizatorilor",
    login_subtitle: "Gestioneaza evenimente, task-uri, membri si resurse dintr-un singur loc.",
    email_label: "Email",
    password_label: "Parola",
    login_hint: "Introdu emailul si parola primite de la admin.",
    login_button: "Intra",
    login_error: "Email sau parola incorecta.",
    name_label: "Nume",
    register_button: "Creeaza cont",
    register_submit: "Creeaza cont",
    register_hint: "Contul se creeaza cu email si parola, fara confirmare prin email. Adminul poate modifica accesul din Echipa.",
    back_to_login: "Am deja cont",
    password_confirm_label: "Confirma parola",
    register_error_name: "Introdu numele complet.",
    register_error_exists: "Exista deja un cont cu acest email.",
    register_error_password: "Parolele nu coincid.",
    register_error_short: "Parola trebuie sa aiba cel putin 6 caractere.",
    register_error_supabase: "Contul nu a fost salvat in Supabase. Incearca din nou.",
    auth_error: "Autentificarea Supabase nu a reusit.",
    auth_no_access: "Contul exista, dar nu are acces in echipa.",
    auth_error_email_disabled: "Loginul cu email este oprit in Supabase. Activeaza Authentication > Providers > Email.",
    auth_error_invalid_credentials: "Emailul sau parola nu sunt corecte.",
    auth_error_existing_account: "Exista deja un cont cu acest email. Intra in cont sau foloseste parola existenta.",
    auth_error_email_not_confirmed: "Emailul nu este confirmat. Pentru login fara email, opreste Confirm email in Supabase.",
    auth_error_email_send_failed: "Supabase inca incearca sa trimita email. Opreste Confirm email in Authentication > Providers > Email.",
    auth_error_confirmation_required: "Confirmarea prin email este inca activa in Supabase. Opreste Confirm email ca loginul sa fie doar cu email si parola.",
    auth_error_rate_limit: "Prea multe incercari. Asteapta putin si incearca din nou.",
    auth_error_signup_disabled: "Inregistrarea este oprita in Supabase. Activeaza signups pentru Email.",
    register_check_email: "Cont creat. Intra cu emailul si parola.",
    public_register: "Inregistreaza-te",
    public_admin: "Admin",
    public_language_label: "Schimba limba",
    nav_dashboard: "Dashboard",
    nav_cars: "Auto participanti",
    nav_events: "Evenimente",
    nav_tasks: "Sarcine",
    nav_team: "Echipa",
    nav_resources: "Resurse",
    logout: "Iesire",
    eyebrow: "Panou intern pentru organizatori",
    language_label: "Limba",
    new_event: "Eveniment nou",
    profile_button: "Profil",
    profile_title: "Profilul meu",
    profile_subtitle: "Datele de acces pentru contul tau de organizator.",
    profile_save: "Salveaza profilul",
    profile_saved: "Profilul a fost salvat.",
    profile_password_label: "Parola noua",
    profile_change_photo: "Schimba poza de profil",
    profile_photo_hint: "JPG, PNG sau WEBP, maximum 5MB.",
    profile_photo_invalid: "Alege o imagine JPG, PNG sau WEBP.",
    profile_photo_too_large: "Imaginea trebuie sa fie maximum 5MB.",
    profile_photo_upload_error: "Poza nu a putut fi incarcata in Storage. Am salvat-o in datele aplicatiei.",
    home_eyebrow: "Pagina principala",
    home_title: "Centrul principal Kultura",
    home_subtitle: "Tot ce conteaza pentru organizarea evenimentului: participanti, sarcini, zone, echipa si resurse.",
    quick_add_car: "Adauga participant",
    quick_add_task: "Adauga sarcina",
    quick_view_cars: "Vezi auto",
    quick_view_tasks: "Vezi sarcini",
    ops_alerts_title: "Alerte organizare",
    ops_alerts_subtitle: "Ce necesita atentie rapida.",
    zone_status_title: "Zone auto",
    zone_status_subtitle: "Ocupare si sosiri pe zone.",
    timeline_title: "Plan zi eveniment",
    timeline_subtitle: "Repere rapide pentru echipa.",
    contacts_title: "Contacte rapide",
    contacts_subtitle: "Persoane cheie pentru coordonare.",
    alert_overdue: "sarcini au depasit termenul",
    alert_due_soon: "sarcini au termen in 48h",
    alert_missing_phone: "participanti fara telefon",
    alert_missing_plate: "participanti fara numar",
    alert_resources: "resurse asteapta confirmare",
    alert_all_good: "Totul arata bine pentru moment.",
    zone_arrived: "sosite",
    zone_invited: "invitate",
    no_zone: "Fara zona",
    empty_contacts: "Adauga membri in echipa pentru contacte rapide.",
    event_plan: [
      ["08:00", "Acces echipa", "Briefing si verificare locatie"],
      ["09:30", "Primire participanti", "Control lista auto si zone"],
      ["11:00", "Deschidere public", "Coordonare acces si media"],
      ["14:00", "Activitati principale", "Monitorizare sarcini urgente"],
      ["18:00", "Inchidere", "Verificare resurse si plecari"],
    ],
    metric_events: "Evenimente active",
    metric_events_note: "2 in pregatire intensiva",
    metric_tasks: "Task-uri deschise",
    metric_tasks_note: "7 au termen saptamana aceasta",
    metric_team: "Membri implicati",
    metric_team_note: "5 roluri operationale",
    metric_risks: "Blocaje",
    metric_risks_note: "Necesita decizie rapida",
    events_title: "Evenimente in lucru",
    events_subtitle: "Status, responsabil si progres pentru fiecare eveniment.",
    view_all: "Vezi tot",
    priority_title: "Prioritati azi",
    responsible: "Responsabil",
    task_due: "Termen",
    take_task: "Iau sarcina",
    task_taken_by: "Luata de",
    task_in_progress: "In lucru",
    task_taken_mine: "Luata de mine",
    finish_task: "Finisata",
    cancel_task_take: "Anuleaza",
    task_done: "Finisata",
    ready: "Aproape gata",
    risk: "Cu risc",
    edit: "Editeaza",
    delete: "Sterge",
    delete_confirm: "Sigur vrei sa stergi acest element?",
    events_admin_title: "Administrare evenimente",
    events_admin_subtitle: "Lista pentru creare, editare si urmarire.",
    add_event: "Adauga eveniment",
    cars_admin_title: "Auto participanti",
    cars_admin_subtitle: "Lista masinilor si soferilor pentru evenimentele interne.",
    add_car: "Adauga auto",
    import_cars: "Import fisier",
    clear_cars: "Sterge toti",
    cars_import_error: "Nu am gasit participanti valizi in fisier.",
    clear_cars_confirm: "Sigur vrei sa stergi toti participantii auto?",
    cars_search_label: "Cauta participant",
    cars_search_placeholder: "Cauta dupa auto, sofer, telefon, numar, zona, categorie sau status",
    cars_empty: "Nu a fost gasit niciun participant.",
    tasks_admin_title: "Sarcine operationale",
    tasks_admin_subtitle: "Task-uri, responsabili si prioritate.",
    add_task: "Adauga task",
    team_admin_title: "Membrii echipei",
    team_admin_subtitle: "Roluri, acces si responsabilitati.",
    add_member: "Adauga membru",
    resources_admin_title: "Resurse si documente",
    resources_admin_subtitle: "Echipamente, furnizori si acte necesare pentru evenimente.",
    add_resource: "Adauga resursa",
    views: {
      dashboard: "Centrul de comanda al evenimentelor auto",
      cars: "Auto participanti",
      events: "Administrare evenimente",
      tasks: "Sarcine operationale",
      team: "Administrare echipa",
      resources: "Resurse si documente",
      profile: "Profilul meu",
    },
    events: [
      ["Night Drive Meetup", "Chisinau Arena", "Logistica", "Victor", "Aproape gata", 82],
      ["Track Day Summer", "Autodrom", "Pista si securitate", "Ana", "In lucru", 58],
      ["Retro Auto Picnic", "Parcul Valea Morilor", "Expozitie", "Mihai", "Cu risc", 43],
    ],
    cars: [
      ["BMW E36", "Alexei Rusu", "+373 69 000 001", "KLT 036", "Zona A", "Drift", "Invitat"],
      ["Toyota Supra MK4", "Dumitru Ceban", "+373 69 000 002", "KLT 404", "Zona B", "Show car", "Sosit"],
      ["Nissan Silvia S15", "Maxim Moraru", "+373 69 000 003", "KLT 015", "Zona A", "Track", "Invitat"],
      ["Audi RS3", "Cristina Lungu", "+373 69 000 004", "KLT 303", "Zona C", "Expo", "Plecat"],
    ],
    tasks: [
      ["Confirmare securitate si ambulanta", "Ana", "Urgent"],
      ["Plan acces staff si invitati", "Victor", "Urgent"],
      ["Lista echipamente media", "Irina", "Mediu"],
      ["Verificare autorizatii locatie", "Mihai", "Mediu"],
    ],
    team: [
      ["Victor", "Coordonator logistica", "Admin general", "admin@kultura.md"],
      ["Ana", "Securitate si pista", "Editor", "ana@kultura.md"],
      ["Irina", "Media si comunicare", "Editor", "irina@kultura.md"],
      ["Mihai", "Parteneri si autorizatii", "Viewer", "mihai@kultura.md"],
    ],
    resources: [
      ["Autorizatii", "Permise de locatie, acces public si siguranta", "In lucru"],
      ["Echipamente", "Statii radio, garduri, conuri, cort staff", "Pregatit"],
      ["Furnizori", "Sunet, catering, securitate, ambulanta", "Confirmare"],
      ["Documente", "Plan acces, schema locatiei, lista contacte", "Actualizat"],
    ],
  },
  ru: {
    brand_subtitle: "Внутренняя организация",
    login_eyebrow: "Доступ команды",
    login_title: "Вход в панель организаторов",
    login_subtitle: "Управляйте событиями, задачами, командой и ресурсами в одном месте.",
    email_label: "Email",
    password_label: "Пароль",
    login_hint: "Введите email и пароль, полученные от администратора.",
    login_button: "Войти",
    login_error: "Неверный email или пароль.",
    name_label: "Имя",
    register_button: "Создать аккаунт",
    register_submit: "Создать аккаунт",
    register_hint: "Аккаунт создается с email и паролем, без подтверждения по email. Админ может изменить доступ в Команде.",
    back_to_login: "У меня уже есть аккаунт",
    password_confirm_label: "Подтвердите пароль",
    register_error_name: "Введите полное имя.",
    register_error_exists: "Аккаунт с этим email уже существует.",
    register_error_password: "Пароли не совпадают.",
    register_error_short: "Пароль должен быть не короче 6 символов.",
    register_error_supabase: "Аккаунт не был сохранен в Supabase. Попробуйте еще раз.",
    auth_error: "Аутентификация Supabase не удалась.",
    auth_no_access: "Аккаунт существует, но у него нет доступа в команде.",
    auth_error_email_disabled: "Вход по email отключен в Supabase. Включите Authentication > Providers > Email.",
    auth_error_invalid_credentials: "Email или пароль неверны.",
    auth_error_existing_account: "Аккаунт с этим email уже существует. Войдите или используйте существующий пароль.",
    auth_error_email_not_confirmed: "Email не подтвержден. Для входа без письма отключите Confirm email в Supabase.",
    auth_error_email_send_failed: "Supabase все еще пытается отправить email. Отключите Confirm email в Authentication > Providers > Email.",
    auth_error_confirmation_required: "Подтверждение email все еще включено в Supabase. Отключите Confirm email, чтобы вход был только по email и паролю.",
    auth_error_rate_limit: "Слишком много попыток. Подождите немного и попробуйте снова.",
    auth_error_signup_disabled: "Регистрация отключена в Supabase. Включите signups для Email.",
    register_check_email: "Аккаунт создан. Войдите с email и паролем.",
    public_register: "Зарегистрироваться",
    public_admin: "Админ",
    public_language_label: "Сменить язык",
    nav_dashboard: "Панель",
    nav_cars: "Авто участников",
    nav_events: "События",
    nav_tasks: "Задачи",
    nav_team: "Команда",
    nav_resources: "Ресурсы",
    logout: "Выход",
    eyebrow: "Внутренняя панель организаторов",
    language_label: "Язык",
    new_event: "Новое событие",
    profile_button: "Профиль",
    profile_title: "Мой профиль",
    profile_subtitle: "Данные доступа для вашего аккаунта организатора.",
    profile_save: "Сохранить профиль",
    profile_saved: "Профиль сохранен.",
    profile_password_label: "Новый пароль",
    profile_change_photo: "Изменить фото профиля",
    profile_photo_hint: "JPG, PNG или WEBP, максимум 5MB.",
    profile_photo_invalid: "Выберите изображение JPG, PNG или WEBP.",
    profile_photo_too_large: "Изображение должно быть максимум 5MB.",
    profile_photo_upload_error: "Фото не удалось загрузить в Storage. Оно сохранено в данных приложения.",
    home_eyebrow: "Glavnaya",
    home_title: "Glavnyy centr Kultura",
    home_subtitle: "Uchastniki, zadachi, zony, komanda i resursy dlya organizacii sobytiya.",
    quick_add_car: "Dobavit uchastnika",
    quick_add_task: "Dobavit zadachu",
    quick_view_cars: "Avto",
    quick_view_tasks: "Zadachi",
    ops_alerts_title: "Organizacionnye alerty",
    ops_alerts_subtitle: "Chto nuzhno proverit bistro.",
    zone_status_title: "Avto zony",
    zone_status_subtitle: "Zanyatost i pribytie po zonam.",
    timeline_title: "Plan dnya",
    timeline_subtitle: "Bystrye orientiry dlya komandy.",
    contacts_title: "Bystrye kontakty",
    contacts_subtitle: "Klyuchevye lyudi dlya koordinacii.",
    alert_overdue: "zadachi prosrochili srok",
    alert_due_soon: "zadachi so srokom do 48h",
    alert_missing_phone: "uchastniki bez telefona",
    alert_missing_plate: "uchastniki bez nomera",
    alert_resources: "resursy zhduut podtverzhdeniya",
    alert_all_good: "Na dannyy moment vse v poryadke.",
    zone_arrived: "pribyli",
    zone_invited: "priglasheny",
    no_zone: "Bez zony",
    empty_contacts: "Dobavte uchastnikov komandy dlya bystryh kontaktov.",
    event_plan: [
      ["08:00", "Dostup komandy", "Briefing i proverka lokacii"],
      ["09:30", "Priem uchastnikov", "Kontrol spiska avto i zon"],
      ["11:00", "Otkrytie dlya publichnosti", "Koordinaciya dostupa i media"],
      ["14:00", "Glavnye aktivnosti", "Kontrol srochnyh zadach"],
      ["18:00", "Zakrytie", "Proverka resursov i vyezdov"],
    ],
    metric_events: "Активные события",
    metric_events_note: "2 в активной подготовке",
    metric_tasks: "Открытые задачи",
    metric_tasks_note: "7 со сроком на этой неделе",
    metric_team: "Участники команды",
    metric_team_note: "5 операционных ролей",
    metric_risks: "Блокеры",
    metric_risks_note: "Нужно быстрое решение",
    events_title: "События в работе",
    events_subtitle: "Статус, ответственный и прогресс по каждому событию.",
    view_all: "Все",
    priority_title: "Приоритеты сегодня",
    responsible: "Ответственный",
    task_due: "Срок",
    take_task: "Беру задачу",
    task_taken_by: "Взял",
    task_in_progress: "В работе",
    task_taken_mine: "Взята мной",
    finish_task: "Готово",
    cancel_task_take: "Отменить",
    task_done: "Готово",
    ready: "Почти готово",
    risk: "Есть риск",
    edit: "Изменить",
    delete: "Удалить",
    delete_confirm: "Точно удалить этот элемент?",
    events_admin_title: "Управление событиями",
    events_admin_subtitle: "Список для создания, редактирования и контроля.",
    add_event: "Добавить событие",
    cars_admin_title: "Авто участников",
    cars_admin_subtitle: "Список машин и водителей для внутренних событий.",
    add_car: "Добавить авто",
    import_cars: "Импорт файла",
    clear_cars: "Удалить всех",
    cars_import_error: "В файле не найдены корректные участники.",
    clear_cars_confirm: "Точно удалить всех авто участников?",
    cars_search_label: "Поиск участника",
    cars_search_placeholder: "Искать по авто, водителю, телефону, номеру, зоне, категории или статусу",
    cars_empty: "Участники не найдены.",
    tasks_admin_title: "Операционные задачи",
    tasks_admin_subtitle: "Задачи, ответственные и приоритет.",
    add_task: "Добавить задачу",
    team_admin_title: "Участники команды",
    team_admin_subtitle: "Роли, доступ и обязанности.",
    add_member: "Добавить участника",
    resources_admin_title: "Ресурсы и документы",
    resources_admin_subtitle: "Оборудование, поставщики и документы для событий.",
    add_resource: "Добавить ресурс",
    views: {
      dashboard: "Центр управления авто событиями",
      cars: "Авто участников",
      events: "Управление событиями",
      tasks: "Операционные задачи",
      team: "Управление командой",
      resources: "Ресурсы и документы",
      profile: "Мой профиль",
    },
    events: [
      ["Night Drive Meetup", "Chisinau Arena", "Логистика", "Виктор", "Почти готово", 82],
      ["Track Day Summer", "Автодром", "Трасса и безопасность", "Анна", "В работе", 58],
      ["Retro Auto Picnic", "Парк Valea Morilor", "Выставка", "Михаил", "Есть риск", 43],
    ],
    cars: [
      ["BMW E36", "Алексей Русу", "+373 69 000 001", "KLT 036", "Зона A", "Дрифт", "Invitat"],
      ["Toyota Supra MK4", "Дмитрий Чебан", "+373 69 000 002", "KLT 404", "Зона B", "Show car", "Sosit"],
      ["Nissan Silvia S15", "Максим Морару", "+373 69 000 003", "KLT 015", "Зона A", "Track", "Invitat"],
      ["Audi RS3", "Кристина Лунгу", "+373 69 000 004", "KLT 303", "Зона C", "Expo", "Plecat"],
    ],
    tasks: [
      ["Подтвердить охрану и скорую помощь", "Анна", "Срочно"],
      ["План доступа для команды и гостей", "Виктор", "Срочно"],
      ["Список медиа оборудования", "Ирина", "Средне"],
      ["Проверка разрешений локации", "Михаил", "Средне"],
    ],
    team: [
      ["Виктор", "Координатор логистики", "Admin general", "admin@kultura.md"],
      ["Анна", "Безопасность и трасса", "Editor", "ana@kultura.md"],
      ["Ирина", "Медиа и коммуникация", "Editor", "irina@kultura.md"],
      ["Михаил", "Партнеры и разрешения", "Viewer", "mihai@kultura.md"],
    ],
    resources: [
      ["Разрешения", "Локация, публичный доступ и безопасность", "В работе"],
      ["Оборудование", "Рации, ограждения, конусы, шатер команды", "Готово"],
      ["Поставщики", "Звук, кейтеринг, охрана, скорая помощь", "Подтвердить"],
      ["Документы", "План доступа, схема локации, список контактов", "Обновлено"],
    ],
  },
  en: {
    brand_subtitle: "Internal operations",
    login_eyebrow: "Team access",
    login_title: "Log in to the organizer panel",
    login_subtitle: "Manage events, tasks, members and resources from one place.",
    email_label: "Email",
    password_label: "Password",
    login_hint: "Enter the email and password received from admin.",
    login_button: "Enter",
    login_error: "Incorrect email or password.",
    name_label: "Name",
    register_button: "Create account",
    register_submit: "Create account",
    register_hint: "The account is created with email and password, without email confirmation. Admin can change access from Team.",
    back_to_login: "I already have an account",
    password_confirm_label: "Confirm password",
    register_error_name: "Enter the full name.",
    register_error_exists: "An account with this email already exists.",
    register_error_password: "Passwords do not match.",
    register_error_short: "Password must be at least 6 characters.",
    register_error_supabase: "The account was not saved in Supabase. Please try again.",
    auth_error: "Supabase authentication failed.",
    auth_no_access: "The account exists, but it has no team access.",
    auth_error_email_disabled: "Email login is disabled in Supabase. Enable Authentication > Providers > Email.",
    auth_error_invalid_credentials: "Email or password is incorrect.",
    auth_error_existing_account: "An account with this email already exists. Log in or use the existing password.",
    auth_error_email_not_confirmed: "Email is not confirmed. For login without email messages, turn off Confirm email in Supabase.",
    auth_error_email_send_failed: "Supabase is still trying to send an email. Turn off Confirm email in Authentication > Providers > Email.",
    auth_error_confirmation_required: "Email confirmation is still enabled in Supabase. Turn off Confirm email so login uses only email and password.",
    auth_error_rate_limit: "Too many attempts. Wait a moment and try again.",
    auth_error_signup_disabled: "Registration is disabled in Supabase. Enable signups for Email.",
    register_check_email: "Account created. Log in with email and password.",
    public_register: "Register",
    public_admin: "Admin",
    public_language_label: "Change language",
    nav_dashboard: "Dashboard",
    nav_cars: "Participant cars",
    nav_events: "Events",
    nav_tasks: "Tasks",
    nav_team: "Team",
    nav_resources: "Resources",
    logout: "Logout",
    eyebrow: "Internal organizer workspace",
    language_label: "Language",
    new_event: "New event",
    profile_button: "Profile",
    profile_title: "My profile",
    profile_subtitle: "Access details for your organizer account.",
    profile_save: "Save profile",
    profile_saved: "Profile saved.",
    profile_password_label: "New password",
    profile_change_photo: "Change profile photo",
    profile_photo_hint: "JPG, PNG or WEBP, maximum 5MB.",
    profile_photo_invalid: "Choose a JPG, PNG or WEBP image.",
    profile_photo_too_large: "Image must be maximum 5MB.",
    profile_photo_upload_error: "The photo could not be uploaded to Storage. It was saved in app data.",
    home_eyebrow: "Main page",
    home_title: "Kultura main control center",
    home_subtitle: "Everything that matters for event operations: participants, tasks, zones, team and resources.",
    quick_add_car: "Add participant",
    quick_add_task: "Add task",
    quick_view_cars: "View cars",
    quick_view_tasks: "View tasks",
    ops_alerts_title: "Operations alerts",
    ops_alerts_subtitle: "What needs quick attention.",
    zone_status_title: "Auto zones",
    zone_status_subtitle: "Capacity and arrivals by zone.",
    timeline_title: "Event day plan",
    timeline_subtitle: "Quick checkpoints for the team.",
    contacts_title: "Quick contacts",
    contacts_subtitle: "Key people for coordination.",
    alert_overdue: "tasks are overdue",
    alert_due_soon: "tasks are due in 48h",
    alert_missing_phone: "participants without phone",
    alert_missing_plate: "participants without plate",
    alert_resources: "resources need confirmation",
    alert_all_good: "Everything looks good for now.",
    zone_arrived: "arrived",
    zone_invited: "invited",
    no_zone: "No zone",
    empty_contacts: "Add team members for quick contacts.",
    event_plan: [
      ["08:00", "Team access", "Briefing and venue check"],
      ["09:30", "Participant arrival", "Check car list and zones"],
      ["11:00", "Public opening", "Coordinate access and media"],
      ["14:00", "Main activities", "Monitor urgent tasks"],
      ["18:00", "Closing", "Check resources and departures"],
    ],
    metric_events: "Active events",
    metric_events_note: "2 in intensive preparation",
    metric_tasks: "Open tasks",
    metric_tasks_note: "7 due this week",
    metric_team: "Team members",
    metric_team_note: "5 operational roles",
    metric_risks: "Blockers",
    metric_risks_note: "Needs a quick decision",
    events_title: "Events in progress",
    events_subtitle: "Status, owner and progress for each event.",
    view_all: "View all",
    priority_title: "Today priorities",
    responsible: "Owner",
    task_due: "Due",
    take_task: "Take task",
    task_taken_by: "Taken by",
    task_in_progress: "In progress",
    task_taken_mine: "Taken by me",
    finish_task: "Done",
    cancel_task_take: "Cancel",
    task_done: "Done",
    ready: "Almost ready",
    risk: "At risk",
    edit: "Edit",
    delete: "Delete",
    delete_confirm: "Are you sure you want to delete this item?",
    events_admin_title: "Event management",
    events_admin_subtitle: "List for creation, editing and tracking.",
    add_event: "Add event",
    cars_admin_title: "Participant cars",
    cars_admin_subtitle: "List of cars and drivers for internal events.",
    add_car: "Add car",
    import_cars: "Import file",
    clear_cars: "Delete all",
    cars_import_error: "No valid participants were found in the file.",
    clear_cars_confirm: "Are you sure you want to delete all participant cars?",
    cars_search_label: "Search participant",
    cars_search_placeholder: "Search by car, driver, phone, plate, zone, category or status",
    cars_empty: "No participants found.",
    tasks_admin_title: "Operational tasks",
    tasks_admin_subtitle: "Tasks, owners and priority.",
    add_task: "Add task",
    team_admin_title: "Team members",
    team_admin_subtitle: "Roles, access and responsibilities.",
    add_member: "Add member",
    resources_admin_title: "Resources and documents",
    resources_admin_subtitle: "Equipment, vendors and documents needed for events.",
    add_resource: "Add resource",
    views: {
      dashboard: "Command center for auto events",
      cars: "Participant cars",
      events: "Event management",
      tasks: "Operational tasks",
      team: "Team management",
      resources: "Resources and documents",
      profile: "My profile",
    },
    events: [
      ["Night Drive Meetup", "Chisinau Arena", "Logistics", "Victor", "Almost ready", 82],
      ["Track Day Summer", "Autodrome", "Track and safety", "Ana", "In progress", 58],
      ["Retro Auto Picnic", "Valea Morilor Park", "Exhibition", "Mihai", "At risk", 43],
    ],
    cars: [
      ["BMW E36", "Alexei Rusu", "+373 69 000 001", "KLT 036", "Zone A", "Drift", "Invitat"],
      ["Toyota Supra MK4", "Dumitru Ceban", "+373 69 000 002", "KLT 404", "Zone B", "Show car", "Sosit"],
      ["Nissan Silvia S15", "Maxim Moraru", "+373 69 000 003", "KLT 015", "Zone A", "Track", "Invitat"],
      ["Audi RS3", "Cristina Lungu", "+373 69 000 004", "KLT 303", "Zone C", "Expo", "Plecat"],
    ],
    tasks: [
      ["Confirm security and ambulance", "Ana", "Urgent"],
      ["Staff and guest access plan", "Victor", "Urgent"],
      ["Media equipment list", "Irina", "Medium"],
      ["Check venue permits", "Mihai", "Medium"],
    ],
    team: [
      ["Victor", "Logistics coordinator", "Admin general", "admin@kultura.md"],
      ["Ana", "Safety and track", "Editor", "ana@kultura.md"],
      ["Irina", "Media and comms", "Editor", "irina@kultura.md"],
      ["Mihai", "Partners and permits", "Viewer", "mihai@kultura.md"],
    ],
    resources: [
      ["Permits", "Venue, public access and safety permits", "In progress"],
      ["Equipment", "Radios, barriers, cones, staff tent", "Ready"],
      ["Vendors", "Sound, catering, security, ambulance", "Confirm"],
      ["Documents", "Access plan, venue map, contact list", "Updated"],
    ],
  },
};

const state = {
  language: localStorage.getItem("autocrew_language") || "ro",
  view: "dashboard",
  notifications: [],
  profileImages: {},
};

const languageOrder = ["ro", "ru", "en"];
const generalAdminEmails = ["admin@kultura.md", "igor.gratii.99@mail.ru"];
let shouldSaveNormalizedTeamRows = false;
let lastSupabaseSaveError = "";
let pendingProfileImageFile = null;
let pendingProfileImagePreview = "";
const profileImageMaxSize = 5 * 1024 * 1024;
const profileImageTypes = ["image/jpeg", "image/png", "image/webp"];

const roleLabels = {
  ro: { admin_general: "Admin general", admin: "Admin", editor: "Coordonator evenimente", viewer: "Observator" },
  ru: { admin_general: "Главный администратор", admin: "Админ", editor: "Координатор событий", viewer: "Наблюдатель" },
  en: { admin_general: "General admin", admin: "Admin", editor: "Event coordinator", viewer: "Observer" },
};

const dataKeys = ["events", "cars", "tasks", "team", "resources"];

function applyStoredData(storedData) {
  if (storedData?.profileImages && typeof storedData.profileImages === "object") {
    state.profileImages = { ...storedData.profileImages };
  }

  Object.entries(storedData || {}).forEach(([language, collections]) => {
    if (!dictionaries[language]) return;
    dataKeys.forEach((key) => {
      if (Array.isArray(collections[key])) {
        dictionaries[language][key] = collections[key];
      }
    });
  });
}

const savedData = JSON.parse(localStorage.getItem("kultura_admin_data") || "{}");
applyStoredData(savedData);

function normalizeTeamRows() {
  const defaults = {
    Victor: "admin@kultura.md",
    Ana: "ana@kultura.md",
    Irina: "irina@kultura.md",
    Mihai: "mihai@kultura.md",
    Виктор: "admin@kultura.md",
    Анна: "ana@kultura.md",
    Ирина: "irina@kultura.md",
    Михаил: "mihai@kultura.md",
  };

  Object.values(dictionaries).forEach((dictionary) => {
    dictionary.team = dictionary.team.map((member, index) => {
      const fallbackEmail = defaults[member[0]] || `member${index + 1}@kultura.md`;
      const email = String(member[3] || "").trim().toLowerCase();
      const nextEmail = member[3] || fallbackEmail;
      const nextEmailKey = String(nextEmail).trim().toLowerCase();
      const shouldRefreshSeededAdmin = fallbackEmail === "admin@kultura.md" && (!email || email === "admin@autocrew.md");
      const hasLegacyPassword = member.length > 4;

      if (generalAdminEmails.includes(nextEmailKey)) {
        if (member[2] !== "Admin general") {
          shouldSaveNormalizedTeamRows = true;
        }
        if (hasLegacyPassword) shouldSaveNormalizedTeamRows = true;
        return [member[0], member[1], "Admin general", nextEmail];
      }

      if (hasLegacyPassword || shouldRefreshSeededAdmin || member.length < 4) {
        shouldSaveNormalizedTeamRows = true;
      }
      return [member[0], member[1], member[2], nextEmail];
    });
  });
}

normalizeTeamRows();

function normalizeCarStatuses() {
  const allowed = ["Invitat", "Sosit", "Plecat"];
  Object.values(dictionaries).forEach((dictionary) => {
    dictionary.cars = dictionary.cars.map((car) => {
      if (car.length === 6) {
        return [car[0], car[1], "-", car[2], car[3], car[4], allowed.includes(car[5]) ? car[5] : "Invitat"];
      }
      if (allowed.includes(car[6])) return car;
      return [car[0], car[1], car[2] || "-", car[3], car[4], car[5], "Invitat"];
    });
  });
}

normalizeCarStatuses();

function isDateValue(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(value || ""));
}

const taskPriorityOptions = ["🚨 Urgente", "⏳ Importante", "📋 Opționale"];

function normalizeTaskPriority(value) {
  const raw = String(value || "").trim();
  const compact = raw
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (compact.includes("urgent") || compact.includes("🚨") || compact.includes("сроч")) {
    return taskPriorityOptions[0];
  }
  if (compact.includes("important") || compact.includes("mediu") || compact.includes("medium") || compact.includes("⏳") || compact.includes("сред")) {
    return taskPriorityOptions[1];
  }
  if (compact.includes("optional") || compact.includes("option") || compact.includes("low") || compact.includes("normal") || compact.includes("📋")) {
    return taskPriorityOptions[2];
  }
  return taskPriorityOptions.includes(raw) ? raw : taskPriorityOptions[1];
}

function taskPriorityClass(priority) {
  const normalized = normalizeTaskPriority(priority);
  if (normalized === taskPriorityOptions[0]) return "priority-urgent";
  if (normalized === taskPriorityOptions[1]) return "priority-important";
  return "priority-optional";
}

function taskPriorityRank(priority) {
  return taskPriorityOptions.indexOf(normalizeTaskPriority(priority));
}

function normalizeTaskRows() {
  Object.values(dictionaries).forEach((dictionary) => {
    dictionary.tasks = dictionary.tasks.map((task) => {
      if (task.length >= 6) return [task[0], task[1], normalizeTaskPriority(task[2]), task[3], task[4], task[5]];
      if (task.length === 5) return [task[0], task[1], normalizeTaskPriority(task[2]), "", task[3], task[4]];
      if (task.length === 4 && isDateValue(task[3])) return [task[0], task[1], normalizeTaskPriority(task[2]), task[3], "", ""];
      if (task.length === 4) return [task[0], task[1], normalizeTaskPriority(task[2]), "", task[3], ""];
      return [task[0], task[1], normalizeTaskPriority(task[2]), "", "", ""];
    });
  });
}

normalizeTaskRows();

function splitCsvLine(line, separator) {
  const values = [];
  let current = "";
  let quoted = false;

  for (const char of line) {
    if (char === '"') {
      quoted = !quoted;
      continue;
    }
    if (char === separator && !quoted) {
      values.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }

  values.push(current.trim());
  return values;
}

function parseCarsCsv(text, fallbackName = "") {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  return carsFromTableRows(
    lines.map((line) => splitCsvLine(line, line.includes(";") ? ";" : ",")),
    fallbackName,
  );
}

function normalizeHeader(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zа-я0-9]/gi, "");
}

function fileBaseName(fileName) {
  return String(fileName || "")
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .trim();
}

function carFromFields({ name, car, phone, plate, zone, category, status }, fallbackName = "") {
  const participantName = name || fallbackName;
  if (!participantName) return null;
  const statusKey = normalizeHeader(status);
  const statusMap = {
    invitat: "Invitat",
    invitata: "Invitat",
    invited: "Invitat",
    sosit: "Sosit",
    arrived: "Sosit",
    venit: "Sosit",
    plecat: "Plecat",
    left: "Plecat",
  };
  const normalizedStatus = statusMap[statusKey] || "Invitat";
  return [car || "-", participantName, phone || "-", plate || "-", zone || "Zona A", category || "-", normalizedStatus];
}

function carsFromTableRows(rows, fallbackName = "") {
  const cleanRows = rows.map((row) => row.map((cell) => String(cell || "").trim())).filter((row) => row.some(Boolean));
  if (cleanRows.length === 0) return [];

  const aliases = {
    name: ["nume", "numeprenume", "prenumenume", "sofer", "participant", "driver", "name", "fullname", "fio", "водитель", "участник", "имя"],
    car: ["masina", "marca", "model", "marcaauto", "autovehicul", "auto", "automobil", "vehicle", "car", "machine", "машина", "авто"],
    phone: ["telefon", "tel", "mobil", "phone", "phonenumber", "mobile", "contact", "телефон", "номерphone"],
    plate: ["numar", "nr", "numarul", "numarinmatriculare", "nrinmatriculare", "inmatriculare", "registration", "plate", "licenseplate", "номер", "госномер"],
    zone: ["zona", "zone", "зона"],
    category: ["categorie", "clasa", "tip", "category", "type", "тип", "категория"],
    status: ["status", "statut", "stare", "state", "статус"],
  };

  function mapHeaders(row) {
    const headers = row.map(normalizeHeader);
    const indexFor = (key) => headers.findIndex((header) => aliases[key].includes(header));
    return {
    name: indexFor("name"),
    car: indexFor("car"),
    phone: indexFor("phone"),
    plate: indexFor("plate"),
      zone: indexFor("zone"),
      category: indexFor("category"),
      status: indexFor("status"),
    };
  }

  function headerScore(columnMap) {
    return Object.values(columnMap).filter((index) => index !== -1).length;
  }

  function valueLooksLikePhone(value) {
    const compact = String(value || "").replace(/[^\d+]/g, "");
    return compact.length >= 7 && /^[+\d]/.test(compact);
  }

  function valueLooksLikePlate(value) {
    const compact = normalizeHeader(value);
    return /[a-zа-я]{1,4}\d{2,4}/i.test(compact) || /\d{2,4}[a-zа-я]{1,4}/i.test(compact);
  }

  function valueLooksLikeStatus(value) {
    return ["invitat", "invitata", "sosit", "venit", "plecat", "invited", "arrived", "left"].includes(normalizeHeader(value));
  }

  function valueLooksLikeCar(value) {
    const compact = normalizeHeader(value);
    const brands = [
      "bmw",
      "audi",
      "mercedes",
      "toyota",
      "nissan",
      "honda",
      "volkswagen",
      "vw",
      "ford",
      "opel",
      "mazda",
      "mitsubishi",
      "subaru",
      "lexus",
      "tesla",
      "porsche",
      "skoda",
      "dacia",
      "renault",
      "peugeot",
      "kia",
      "hyundai",
      "fiat",
      "chevrolet",
      "dodge",
      "seat",
      "volvo",
      "lada",
      "ваз",
    ];
    return brands.some((brand) => compact.includes(brand)) || /\b(e|s|rs|mk|gtr|gt|m)\d{1,3}\b/i.test(String(value || ""));
  }

  function valueLooksLikeName(value) {
    const text = String(value || "").trim();
    if (!text || valueLooksLikePhone(text) || valueLooksLikePlate(text) || valueLooksLikeCar(text) || valueLooksLikeStatus(text)) return false;
    const words = text.split(/\s+/).filter(Boolean);
    return words.length >= 2 || /^[A-ZĂÂÎȘȚА-Я][a-zăâîșțа-я-]+$/.test(text);
  }

  function bestColumnByScore(sourceRows, tester, blocked = []) {
    const maxColumns = Math.max(...sourceRows.map((row) => row.length));
    let bestIndex = -1;
    let bestScore = 0;

    for (let index = 0; index < maxColumns; index += 1) {
      if (blocked.includes(index)) continue;
      const score = sourceRows.reduce((total, row) => total + (tester(row[index]) ? 1 : 0), 0);
      if (score > bestScore) {
        bestScore = score;
        bestIndex = index;
      }
    }

    return bestScore > 0 ? bestIndex : -1;
  }

  function inferColumns(sourceRows) {
    const sample = sourceRows.slice(0, 25);
    const inferred = {
      phone: bestColumnByScore(sample, valueLooksLikePhone),
      plate: -1,
      status: -1,
      car: -1,
      name: -1,
      zone: -1,
      category: -1,
    };
    inferred.plate = bestColumnByScore(sample, valueLooksLikePlate, [inferred.phone]);
    inferred.status = bestColumnByScore(sample, valueLooksLikeStatus, [inferred.phone, inferred.plate]);
    inferred.car = bestColumnByScore(sample, valueLooksLikeCar, [inferred.phone, inferred.plate, inferred.status]);
    inferred.name = bestColumnByScore(sample, valueLooksLikeName, [inferred.phone, inferred.plate, inferred.status, inferred.car]);

    if (inferred.name === -1 && inferred.car === 0) inferred.name = 1;
    if (inferred.car === -1 && inferred.name === 0) inferred.car = 1;
    if (inferred.name === -1) inferred.name = 0;
    if (inferred.car === -1) inferred.car = inferred.name === 0 ? 1 : 0;

    const used = [inferred.name, inferred.car, inferred.phone, inferred.plate, inferred.status].filter((index) => index !== -1);
    inferred.zone = bestColumnByScore(sample, (value) => normalizeHeader(value).startsWith("zona") || normalizeHeader(value).startsWith("zone"), used);
    inferred.category = bestColumnByScore(sample, (value) => !valueLooksLikeName(value) && !valueLooksLikeCar(value) && String(value || "").trim().length > 0, [
      ...used,
      inferred.zone,
    ]);

    return inferred;
  }

  let headerRowIndex = -1;
  let columnMap = null;
  let bestScore = 0;

  cleanRows.slice(0, 10).forEach((row, index) => {
    const candidateMap = mapHeaders(row);
    const score = headerScore(candidateMap);
    const hasIdentity = candidateMap.name !== -1 || candidateMap.car !== -1;
    if (hasIdentity && score > bestScore) {
      bestScore = score;
      headerRowIndex = index;
      columnMap = candidateMap;
    }
  });

  const hasHeader = Boolean(columnMap) && bestScore >= 2;
  const sourceRows = hasHeader ? cleanRows.slice(headerRowIndex + 1) : cleanRows;
  const inferredMap = hasHeader ? null : inferColumns(sourceRows);

  return sourceRows
    .map((row) => {
      if (hasHeader) {
        return carFromFields(
          {
            name: columnMap.name === -1 ? "" : row[columnMap.name],
            car: columnMap.car === -1 ? "" : row[columnMap.car],
            phone: columnMap.phone === -1 ? "" : row[columnMap.phone],
            plate: columnMap.plate === -1 ? "" : row[columnMap.plate],
            zone: columnMap.zone === -1 ? "" : row[columnMap.zone],
            category: columnMap.category === -1 ? "" : row[columnMap.category],
            status: columnMap.status === -1 ? "" : row[columnMap.status],
          },
          fallbackName,
        );
      }
        return carFromFields(
          {
            name: row[inferredMap.name],
            car: row[inferredMap.car],
            phone: inferredMap.phone === -1 ? "" : row[inferredMap.phone],
            plate: inferredMap.plate === -1 ? "" : row[inferredMap.plate],
            zone: inferredMap.zone === -1 ? "" : row[inferredMap.zone],
            category: inferredMap.category === -1 ? "" : row[inferredMap.category],
            status: inferredMap.status === -1 ? "" : row[inferredMap.status],
          },
          fallbackName,
        );
    })
    .filter(Boolean);
}

function readZipUInt16(bytes, offset) {
  return bytes[offset] | (bytes[offset + 1] << 8);
}

function readZipUInt32(bytes, offset) {
  return (bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | (bytes[offset + 3] << 24)) >>> 0;
}

async function inflateZipEntry(bytes, entry) {
  if (entry.method === 0) return entry.data;
  const stream = new Blob([entry.data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function unzipXlsxEntries(buffer) {
  const bytes = new Uint8Array(buffer);
  let eocd = -1;
  for (let index = bytes.length - 22; index >= 0; index -= 1) {
    if (readZipUInt32(bytes, index) === 0x06054b50) {
      eocd = index;
      break;
    }
  }
  if (eocd === -1) return {};

  const decoder = new TextDecoder();
  const entries = {};
  const total = readZipUInt16(bytes, eocd + 10);
  let offset = readZipUInt32(bytes, eocd + 16);

  for (let i = 0; i < total; i += 1) {
    const nameLength = readZipUInt16(bytes, offset + 28);
    const extraLength = readZipUInt16(bytes, offset + 30);
    const commentLength = readZipUInt16(bytes, offset + 32);
    const method = readZipUInt16(bytes, offset + 10);
    const compressedSize = readZipUInt32(bytes, offset + 20);
    const localOffset = readZipUInt32(bytes, offset + 42);
    const name = decoder.decode(bytes.slice(offset + 46, offset + 46 + nameLength));
    const localNameLength = readZipUInt16(bytes, localOffset + 26);
    const localExtraLength = readZipUInt16(bytes, localOffset + 28);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const data = bytes.slice(dataStart, dataStart + compressedSize);

    entries[name] = await inflateZipEntry(bytes, { method, data });
    offset += 46 + nameLength + extraLength + commentLength;
  }

  return entries;
}

function xmlText(node) {
  return node ? node.textContent || "" : "";
}

function columnIndexFromCell(reference) {
  const letters = String(reference || "").match(/[A-Z]+/i)?.[0] || "A";
  return letters
    .toUpperCase()
    .split("")
    .reduce((total, letter) => total * 26 + letter.charCodeAt(0) - 64, 0) - 1;
}

async function parseCarsXlsx(buffer, fallbackName = "") {
  const entries = await unzipXlsxEntries(buffer);
  const decoder = new TextDecoder();
  const parser = new DOMParser();
  const sharedXml = entries["xl/sharedStrings.xml"] ? decoder.decode(entries["xl/sharedStrings.xml"]) : "";
  const shared = sharedXml
    ? Array.from(parser.parseFromString(sharedXml, "application/xml").querySelectorAll("si")).map((node) =>
        Array.from(node.querySelectorAll("t")).map(xmlText).join(""),
      )
    : [];
  const sheetNames = Object.keys(entries).filter((name) => /^xl\/worksheets\/sheet\d+\.xml$/.test(name));
  let bestCars = [];

  sheetNames.forEach((sheetName) => {
    const sheet = parser.parseFromString(decoder.decode(entries[sheetName]), "application/xml");
    const rows = Array.from(sheet.querySelectorAll("sheetData row")).map((row) => {
      const values = [];
      Array.from(row.querySelectorAll("c")).forEach((cell) => {
        const type = cell.getAttribute("t");
        const index = columnIndexFromCell(cell.getAttribute("r"));
        if (type === "s") {
          values[index] = shared[Number(xmlText(cell.querySelector("v")))] || "";
          return;
        }
        if (type === "inlineStr") {
          values[index] = xmlText(cell.querySelector("is t"));
          return;
        }
        values[index] = xmlText(cell.querySelector("v"));
      });
      return values;
    });
    const cars = carsFromTableRows(rows, fallbackName);
    if (cars.length > bestCars.length) {
      bestCars = cars;
    }
  });

  return bestCars;
}

const modalText = {
  ro: { add: "Adauga", edit: "Editeaza", save: "Salveaza", cancel: "Anuleaza", close: "Inchide" },
  ru: { add: "Добавить", edit: "Изменить", save: "Сохранить", cancel: "Отмена", close: "Закрыть" },
  en: { add: "Add", edit: "Edit", save: "Save", cancel: "Cancel", close: "Close" },
};

const formConfigs = {
  events: {
    title: { ro: "eveniment", ru: "событие", en: "event" },
    fields: [
      { label: { ro: "Nume", ru: "Название", en: "Name" }, placeholder: "Night Drive Meetup" },
      { label: { ro: "Locatie", ru: "Локация", en: "Location" }, placeholder: "Chisinau Arena" },
      { label: { ro: "Tip", ru: "Тип", en: "Type" }, placeholder: "Logistica" },
      { label: { ro: "Responsabil", ru: "Ответственный", en: "Owner" }, placeholder: "Victor" },
      { label: { ro: "Status", ru: "Статус", en: "Status" }, placeholder: "In lucru" },
      { label: { ro: "Progres", ru: "Прогресс", en: "Progress" }, placeholder: "60", type: "number", min: 0, max: 100 },
    ],
  },
  cars: {
    title: { ro: "auto", ru: "авто", en: "car" },
    fields: [
      { label: { ro: "Sofer", ru: "Водитель", en: "Driver" }, placeholder: "Alexei Rusu" },
      { label: { ro: "Masina", ru: "Машина", en: "Car" }, placeholder: "BMW E36" },
      { label: { ro: "Numar de telefon", ru: "Номер телефона", en: "Phone number" }, placeholder: "+373 69 000 000", type: "tel" },
      { label: { ro: "Numarul de inmatriculare", ru: "Регистрационный номер", en: "License plate" }, placeholder: "KLT 036" },
      { label: { ro: "Zona", ru: "Зона", en: "Zone" }, placeholder: "Zona A / B / C" },
      { label: { ro: "Categorie", ru: "Категория", en: "Category" }, placeholder: "Drift" },
      { label: { ro: "Status", ru: "Статус", en: "Status" }, placeholder: "Invitat", type: "select", options: ["Invitat", "Sosit", "Plecat"] },
    ],
  },
  tasks: {
    title: { ro: "task", ru: "задачу", en: "task" },
    fields: [
      { label: { ro: "Task", ru: "Задача", en: "Task" }, placeholder: "Confirmare securitate" },
      { label: { ro: "Responsabil", ru: "Ответственный", en: "Owner" }, placeholder: "Ana" },
      { label: { ro: "Prioritate", ru: "Приоритет", en: "Priority" }, placeholder: taskPriorityOptions[0], type: "select", options: taskPriorityOptions },
      { label: { ro: "Termen", ru: "Срок", en: "Due date" }, placeholder: "", type: "date" },
    ],
  },
  team: {
    title: { ro: "membru", ru: "участника", en: "member" },
    fields: [
      { label: { ro: "Nume", ru: "Имя", en: "Name" }, placeholder: "Victor" },
      { label: { ro: "Rol", ru: "Роль", en: "Role" }, placeholder: "Coordonator logistica" },
      { label: { ro: "Acces", ru: "Доступ", en: "Access" }, placeholder: "Admin general", type: "select", options: ["Admin general", "Admin", "Editor", "Viewer"] },
      { label: { ro: "Email", ru: "Email", en: "Email" }, placeholder: "admin@kultura.md", type: "email" },
    ],
  },
  resources: {
    title: { ro: "resursa", ru: "ресурс", en: "resource" },
    fields: [
      { label: { ro: "Titlu", ru: "Название", en: "Title" }, placeholder: "Autorizatii" },
      { label: { ro: "Descriere", ru: "Описание", en: "Description" }, placeholder: "Acte necesare pentru locatie" },
      { label: { ro: "Status", ru: "Статус", en: "Status" }, placeholder: "In lucru" },
    ],
  },
};

const publicHome = document.querySelector("#public-home");
const publicNav = document.querySelector(".public-nav");
const publicLanguage = document.querySelector("#public-language");
const adminEntry = document.querySelector("#admin-entry");
const registerEntry = document.querySelector("#register-entry");
const loginScreen = document.querySelector("#login-screen");
const adminApp = document.querySelector("#admin-app");
const navMenu = document.querySelector(".nav-menu");
const menuToggle = document.querySelector("#menu-toggle");
const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const showRegisterButton = document.querySelector("#show-register-button");
const showLoginButton = document.querySelector("#show-login-button");
const formError = document.querySelector("#form-error");
const registerError = document.querySelector("#register-error");
const languageSelect = document.querySelector("#language");
const viewTitle = document.querySelector("#view-title");
const currentUserName = document.querySelector("#current-user-name");
const currentUserRole = document.querySelector("#current-user-role");
const eventList = document.querySelector("#event-list");
const carsTable = document.querySelector("#cars-table");
const carsSearch = document.querySelector("#cars-search");
const carsImportButton = document.querySelector("#cars-import-button");
const carsImportFile = document.querySelector("#cars-import-file");
const carsClearButton = document.querySelector("#cars-clear-button");
const eventsTable = document.querySelector("#events-table");
const priorityList = document.querySelector("#priority-list");
const opsAlerts = document.querySelector("#ops-alerts");
const zoneStatus = document.querySelector("#zone-status");
const eventTimeline = document.querySelector("#event-timeline");
const quickContacts = document.querySelector("#quick-contacts");
const tasksTable = document.querySelector("#tasks-table");
const teamList = document.querySelector("#team-list");
const resourceList = document.querySelector("#resource-list");
const profileForm = document.querySelector("#profile-form");
const profileAvatar = document.querySelector("#profile-avatar");
const profileName = document.querySelector("#profile-name");
const profileRole = document.querySelector("#profile-role");
const profileEmail = document.querySelector("#profile-email");
const profilePassword = document.querySelector("#profile-password");
const profileSuccess = document.querySelector("#profile-success");
const profilePhotoButton = document.querySelector("#profile-photo-button");
const profilePhotoInput = document.querySelector("#profile-photo-input");
const profilePhotoHint = document.querySelector("#profile-photo-hint");
const profileActionPhoto = document.querySelector("#profile-action-photo");
const syncStatus = document.querySelector("#sync-status");
const toastContainer = document.querySelector("#toast-container");
const notificationsButton = document.querySelector("#notifications-button");
const notificationsPanel = document.querySelector("#notifications-panel");
const notificationsList = document.querySelector("#notifications-list");
const clearNotificationsButton = document.querySelector("#clear-notifications-button");
const notificationBadge = document.querySelector("#notification-badge");

if (notificationsPanel && notificationsPanel.parentElement !== document.body) {
  document.body.append(notificationsPanel);
}

function updateNotificationBadge() {
  if (!notificationBadge) return;
  const unreadCount = state.notifications.filter((item) => !item.read).length;
  notificationBadge.textContent = unreadCount > 0 ? String(unreadCount) : "";
  notificationBadge.classList.toggle("visible", unreadCount > 0);
}

function renderNotifications() {
  if (!notificationsList || !notificationsPanel) return;
  const items = state.notifications
    .map((item) => `
      <article class="notification-item ${item.read ? "" : "unread"}">
        <div>${escapeHtml(item.message)}</div>
        <small>${escapeHtml(item.time)}</small>
      </article>
    `)
    .join("");

  notificationsList.innerHTML = items || `<div class="empty-state">Nu exista notificari recente.</div>`;
  updateNotificationBadge();
  if (notificationsPanel.classList.contains("open")) {
    requestAnimationFrame(positionNotificationsPanel);
  }
}

function addNotification(message, type = "info") {
  const date = new Date();
  state.notifications.unshift({
    id: date.getTime(),
    message,
    type,
    read: false,
    time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  });
  renderNotifications();
  updateNotificationBadge();
  showToast(message, type);
}

function toggleNotificationsPanel() {
  if (!notificationsPanel || !notificationsButton) return;
  const opened = !notificationsPanel.classList.contains("open");
  notificationsPanel.classList.toggle("open", opened);
  notificationsPanel.setAttribute("aria-hidden", String(!opened));
  notificationsButton.setAttribute("aria-expanded", String(opened));
  if (opened) {
    requestAnimationFrame(positionNotificationsPanel);
    state.notifications.forEach((item) => { item.read = true; });
    renderNotifications();
  }
}

function closeNotificationsPanel() {
  if (!notificationsPanel || !notificationsButton) return;
  notificationsPanel.classList.remove("open");
  notificationsPanel.classList.remove("open-up");
  notificationsPanel.style.removeProperty("max-height");
  notificationsList?.style.removeProperty("max-height");
  notificationsPanel.setAttribute("aria-hidden", "true");
  notificationsButton.setAttribute("aria-expanded", "false");
}

function positionNotificationsPanel() {
  if (!notificationsPanel || !notificationsButton) return;
  const isMobile = window.matchMedia("(max-width: 720px)").matches;
  const buttonRect = notificationsButton.getBoundingClientRect();
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const spaceBelow = viewportHeight - buttonRect.bottom;
  const spaceAbove = buttonRect.top;
  const margin = isMobile ? 8 : 12;
  const gap = isMobile ? 10 : 12;
  const panelWidth = isMobile
    ? Math.max(260, viewportWidth - margin * 2)
    : Math.min(320, viewportWidth - margin * 2);
  const panelLeft = isMobile
    ? margin
    : Math.min(Math.max(margin, buttonRect.right - panelWidth), viewportWidth - panelWidth - margin);
  const shouldOpenUp = isMobile || (spaceBelow < 390 && spaceAbove > spaceBelow);
  const availableSpace = Math.max(190, Math.floor((shouldOpenUp ? spaceAbove : spaceBelow) - margin - gap));
  const maxPanelHeight = Math.min(380, availableSpace);

  notificationsPanel.classList.toggle("open-up", shouldOpenUp);
  notificationsPanel.style.position = "fixed";
  notificationsPanel.style.left = `${panelLeft}px`;
  notificationsPanel.style.right = "auto";
  notificationsPanel.style.width = `${panelWidth}px`;
  notificationsPanel.style.zIndex = "1500";
  notificationsPanel.style.top = shouldOpenUp ? "auto" : `${buttonRect.bottom + gap}px`;
  notificationsPanel.style.bottom = shouldOpenUp ? `${viewportHeight - buttonRect.top + gap}px` : "auto";
  notificationsPanel.style.maxHeight = `${maxPanelHeight}px`;
  if (notificationsList) {
    notificationsList.style.maxHeight = `${Math.max(120, maxPanelHeight - 62)}px`;
  }
}

function showToast(message, type = "info", duration = 3200) {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("visible"));
  setTimeout(() => {
    toast.classList.remove("visible");
    toast.addEventListener(
      "transitionend",
      () => toast.remove(),
      { once: true }
    );
  }, duration);
}

function t() {
  return dictionaries[state.language];
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("kultura_current_user") || "null");
  } catch (error) {
    clearStoredSession();
    return null;
  }
}

function clearStoredSession() {
  localStorage.removeItem("autocrew_logged_in");
  localStorage.removeItem("kultura_current_user");
  localStorage.removeItem("kultura_last_view");
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function getAuthRedirectUrl() {
  const redirectUrl = new URL(window.location.href);
  redirectUrl.hash = "";
  redirectUrl.search = "";
  return redirectUrl.toString();
}

function hasAuthRedirectHash() {
  const hash = window.location.hash || "";
  return hash.includes("access_token=") || hash.includes("refresh_token=") || hash.includes("error_code=") || hash.includes("type=signup");
}

function authRedirectErrorMessage() {
  if (!window.location.hash) return "";
  const params = new URLSearchParams(window.location.hash.slice(1));
  return params.get("error_description") || params.get("error") || "";
}

function clearAuthRedirectHash() {
  if (!hasAuthRedirectHash() || !window.history?.replaceState) return;
  window.history.replaceState(null, document.title, `${window.location.pathname}${window.location.search}`);
}

async function getActiveSupabaseSession() {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient.auth.getSession();
  if (error) {
    console.warn("Sesiunea Supabase nu a putut fi citita.", error);
    return null;
  }
  return data?.session || null;
}

function nameFromAuthUser(authUser, fallbackName = "", fallbackEmail = "") {
  const metadataName = String(authUser?.user_metadata?.name || "").trim();
  const typedName = String(fallbackName || "").trim();
  const emailName = normalizeEmail(authUser?.email || fallbackEmail).split("@")[0];
  return metadataName || typedName || emailName || "Membru";
}

function setFormError(target, message) {
  if (!target) return;
  target.textContent = message;
  target.classList.add("visible");
}

function clearFormError(target) {
  if (!target) return;
  target.textContent = "";
  target.classList.remove("visible");
}

function setSubmitLoading(button, loading, loadingText = "") {
  if (!button) return;
  if (!button.dataset.defaultText) {
    button.dataset.defaultText = button.textContent;
  }
  button.disabled = loading;
  button.textContent = loading ? loadingText || button.dataset.defaultText : button.dataset.defaultText;
}

function authErrorMessage(error, fallback = t().auth_error) {
  const message = String(error?.message || "").toLowerCase();
  const code = String(error?.code || "").toLowerCase();

  if (message.includes("email logins are disabled") || code.includes("email_provider_disabled")) {
    return t().auth_error_email_disabled;
  }
  if (message.includes("invalid login credentials") || message.includes("invalid credentials")) {
    return t().auth_error_invalid_credentials;
  }
  if (message.includes("already registered") || message.includes("already exists") || code.includes("user_already_exists")) {
    return t().auth_error_existing_account;
  }
  if (message.includes("error sending confirmation email") || message.includes("sending confirmation email") || message.includes("error sending invite email")) {
    return t().auth_error_email_send_failed;
  }
  if (message.includes("email not confirmed") || message.includes("not confirmed")) {
    return t().auth_error_email_not_confirmed;
  }
  if (message.includes("rate limit") || message.includes("security purposes") || code.includes("over_email_send_rate_limit")) {
    return t().auth_error_rate_limit;
  }
  if (message.includes("signup") && (message.includes("disabled") || message.includes("not allowed"))) {
    return t().auth_error_signup_disabled;
  }

  return error?.message || fallback;
}

function databaseErrorMessage(error, fallback = t().register_error_supabase) {
  const message = String(error?.message || "").trim();
  const details = String(error?.details || "").trim();
  const code = String(error?.code || "").trim();
  const lowerMessage = message.toLowerCase();
  const suffix = [code, message || details].filter(Boolean).join(": ");

  if (lowerMessage.includes("row-level security") || code === "42501") {
    return `${fallback} Verifica politicile RLS pentru tabela ${supabaseConfig.table}.`;
  }
  if (lowerMessage.includes("permission denied")) {
    return `${fallback} Lipsesc permisiunile pentru tabela ${supabaseConfig.table}.`;
  }
  if (lowerMessage.includes("failed to fetch") || lowerMessage.includes("network")) {
    return `${fallback} Verifica internetul si conexiunea Supabase.`;
  }

  return suffix ? `${fallback} (${suffix})` : fallback;
}

function userFromTeamMember(member) {
  if (!member) return null;
  const [name, roleDescription, access, memberEmail] = member;
  return { name, email: String(memberEmail).trim(), role: access, roleDescription };
}

function setAuthMode(mode = "login") {
  const isRegister = mode === "register";
  loginForm?.classList.toggle("is-hidden", isRegister);
  registerForm?.classList.toggle("is-hidden", !isRegister);
  if (formError) formError.textContent = t().login_error;
  formError?.classList.remove("visible");
  clearFormError(registerError);
}

function accessKey(access) {
  return String(access || "")
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, "_");
}

function roleLabel(role) {
  const key = accessKey(role);
  return roleLabels[state.language][key] || roleLabels.ro[key] || role;
}

function canManage(kind) {
  const user = getCurrentUser();
  const role = accessKey(user?.role);
  if (!user) return false;
  if (role === "admin_general") return true;
  if (role === "admin") return kind !== "team";
  if (role === "editor") return kind !== "team";
  return false;
}

function canViewTeam() {
  return accessKey(getCurrentUser()?.role) === "admin_general";
}

function uiText(key) {
  return modalText[state.language][key] || modalText.ro[key];
}

function labelText(value) {
  return value[state.language] || value.ro;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function setSyncStatus(message, state = "") {
  if (!syncStatus) return;
  syncStatus.textContent = message;
  syncStatus.classList.toggle("ok", state === "ok");
  syncStatus.classList.toggle("error", state === "error");
}

function buildDataPayload() {
  const payload = { profileImages: state.profileImages };
  Object.keys(dictionaries).forEach((language) => {
    payload[language] = {};
    dataKeys.forEach((key) => {
      payload[language][key] = dictionaries[language][key];
    });
  });
  return payload;
}

async function saveData(options = {}) {
  const { requireSupabase = false } = options;
  const payload = buildDataPayload();
  if (requireSupabase) {
    const saved = await saveDataToSupabase(payload);
    if (!saved) return false;
    localStorage.setItem("kultura_admin_data", JSON.stringify(payload));
    return true;
  }

  localStorage.setItem("kultura_admin_data", JSON.stringify(payload));
  saveDataToSupabase(payload);
  return true;
}

async function saveDataToSupabase(payload) {
  lastSupabaseSaveError = "";
  if (!supabaseClient) {
    lastSupabaseSaveError = t().auth_error;
    setSyncStatus("Supabase: neconfigurat", "error");
    return false;
  }

  setSyncStatus("Supabase: salvez...");

  const { data, error } = await supabaseClient
    .from(supabaseConfig.table)
    .upsert(
      {
        id: supabaseConfig.rowId,
        data: payload,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" },
    )
    .select("id");

  if (error) {
    console.warn("Datele nu au fost salvate in Supabase.", error);
    lastSupabaseSaveError = databaseErrorMessage(error);
    setSyncStatus(`Supabase: eroare ${error.code || ""}`.trim(), "error");
    return false;
  }

  if (!data || (Array.isArray(data) && data.length === 0)) {
    lastSupabaseSaveError = `${t().register_error_supabase} Verifica daca tabela permite select dupa salvare.`;
    setSyncStatus("Supabase: eroare la salvare", "error");
    return false;
  }

  setSyncStatus("Supabase: salvat", "ok");
  console.info("Datele au fost salvate in Supabase.");
  return true;
}

async function loadDataFromSupabase() {
  if (!supabaseClient) {
    setSyncStatus("Supabase: neconfigurat, folosesc date locale");
    return;
  }

  setSyncStatus("Supabase: citesc...");

  const { data, error } = await supabaseClient
    .from(supabaseConfig.table)
    .select("data")
    .eq("id", supabaseConfig.rowId)
    .maybeSingle();

  if (error) {
    console.warn("Datele nu au putut fi citite din Supabase.", error);
    setSyncStatus(`Supabase: eroare, folosesc date locale`.trim(), "error");
    return;
  }

  if (data?.data) {
    applyStoredData(data.data);
    localStorage.setItem("kultura_admin_data", JSON.stringify(data.data));
    setSyncStatus("Supabase: conectat", "ok");
    return;
  }

  setSyncStatus("Supabase: creez main...");
  await saveDataToSupabase(buildDataPayload());
}

function findTeamMemberByEmail(email) {
  const normalizedEmail = normalizeEmail(email);
  return (
    t().team.find((member) => normalizeEmail(member[3]) === normalizedEmail) ||
    Object.values(dictionaries)
      .flatMap((dictionary) => dictionary.team)
      .find((member) => normalizeEmail(member[3]) === normalizedEmail) ||
    null
  );
}

async function signInWithSupabase(email, password) {
  if (!supabaseClient) {
    return { user: null, error: new Error(t().auth_error) };
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: normalizeEmail(email),
    password,
  });

  return { user: data?.user || null, error };
}

async function signUpWithSupabase(email, password, name) {
  if (!supabaseClient) {
    return { user: null, session: null, error: new Error(t().auth_error) };
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email: normalizeEmail(email),
    password,
    options: {
      data: { name: String(name || "").trim() },
      emailRedirectTo: getAuthRedirectUrl(),
    },
  });

  const identities = Array.isArray(data?.user?.identities) ? data.user.identities : null;
  const existingAccount = Boolean(data?.user && identities && identities.length === 0 && !data?.session);
  return { user: data?.user || null, session: data?.session || null, error, existingAccount };
}

function teamEmailExists(email) {
  const normalizedEmail = normalizeEmail(email);
  return Object.values(dictionaries).some((dictionary) =>
    dictionary.team.some((member) => normalizeEmail(member[3]) === normalizedEmail),
  );
}

function addRegisteredUser(name, email) {
  const roleDescriptions = {
    ro: "Membru inregistrat",
    ru: "Зарегистрированный участник",
    en: "Registered member",
  };
  const normalizedEmail = normalizeEmail(email);
  const access = generalAdminEmails.includes(normalizedEmail) ? "Admin general" : "Viewer";
  Object.entries(dictionaries).forEach(([language, dictionary]) => {
    dictionary.team.unshift([
      String(name || "").trim(),
      roleDescriptions[language] || roleDescriptions.ro,
      access,
      normalizedEmail,
    ]);
  });
  return { name: String(name || "").trim(), email: normalizedEmail, role: access, roleDescription: roleDescriptions[state.language] || roleDescriptions.ro };
}

function removeRegisteredUser(email) {
  const normalizedEmail = normalizeEmail(email);
  Object.values(dictionaries).forEach((dictionary) => {
    dictionary.team = dictionary.team.filter((member) => normalizeEmail(member[3]) !== normalizedEmail);
  });
}

function findCurrentTeamMember() {
  const user = getCurrentUser();
  if (!user) return null;
  return findTeamMemberByEmail(user.email);
}

async function ensureTeamMemberForAuthUser(authUser, fallbackName = "", fallbackEmail = "") {
  const email = normalizeEmail(authUser?.email || fallbackEmail);
  const existingMember = findTeamMemberByEmail(email);
  if (existingMember) {
    return { user: userFromTeamMember(existingMember), saved: true };
  }

  const user = addRegisteredUser(nameFromAuthUser(authUser, fallbackName, email), email);
  const saved = await saveData({ requireSupabase: Boolean(supabaseClient) });
  if (!saved) {
    removeRegisteredUser(email);
    renderTeam();
    renderMetrics();
    return { user: null, saved: false, error: lastSupabaseSaveError || t().register_error_supabase };
  }

  renderTeam();
  renderMetrics();
  return { user, saved: true, error: "" };
}

function loginUser(user) {
  localStorage.setItem("autocrew_logged_in", "yes");
  localStorage.setItem("kultura_current_user", JSON.stringify({ name: user.name, email: normalizeEmail(user.email), role: user.role }));
  formError?.classList.remove("visible");
  closeModal();
  showAdmin();
  showView(localStorage.getItem("kultura_last_view") || state.view || "dashboard");
}

function statusClass(status) {
  if (status === t().ready) return "status-ready";
  if (status === t().risk) return "status-risk";
  return "status-progress";
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function profileImageKey(email) {
  return String(email || "").trim().toLowerCase();
}

function getProfileImage(email) {
  return state.profileImages[profileImageKey(email)] || "";
}

function setProfileImagePreview(name, email, preview = "") {
  const imageSource = preview || getProfileImage(email);
  if (profileAvatar) {
    profileAvatar.innerHTML = "";
    profileAvatar.classList.toggle("has-image", Boolean(imageSource));
    if (imageSource) {
      const image = document.createElement("img");
      image.src = imageSource;
      image.alt = "";
      profileAvatar.append(image);
    } else {
      profileAvatar.textContent = initials(name);
    }
  }

  const profileAction = document.querySelector(".profile-action");
  if (profileActionPhoto) {
    profileActionPhoto.classList.toggle("visible", Boolean(imageSource));
    profileActionPhoto.hidden = !imageSource;
    if (imageSource) {
      profileActionPhoto.src = imageSource;
    } else {
      profileActionPhoto.removeAttribute("src");
    }
  }
  profileAction?.classList.toggle("has-photo", Boolean(imageSource));
}

function validateProfileImage(file) {
  const hasValidType = profileImageTypes.includes(file?.type);
  const hasValidExtension = /\.(jpe?g|png|webp)$/i.test(file?.name || "");
  if (!file || (!hasValidType && !hasValidExtension)) {
    return t().profile_photo_invalid;
  }
  if (file.size > profileImageMaxSize) {
    return t().profile_photo_too_large;
  }
  return "";
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")), { once: true });
    reader.addEventListener("error", () => reject(reader.error), { once: true });
    reader.readAsDataURL(file);
  });
}

async function uploadProfileImageToStorage(file, email) {
  if (!supabaseClient?.storage) return "";
  const extension = (file.name.split(".").pop() || file.type.split("/").pop() || "jpg")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  const safeEmail = profileImageKey(email).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "user";
  const path = `${safeEmail}/${Date.now()}.${extension || "jpg"}`;

  const { error } = await supabaseClient.storage
    .from(supabaseConfig.profileBucket)
    .upload(path, file, {
      cacheControl: "3600",
      contentType: file.type,
      upsert: true,
    });

  if (error) throw error;

  const { data } = supabaseClient.storage
    .from(supabaseConfig.profileBucket)
    .getPublicUrl(path);

  return data?.publicUrl || "";
}

function renderTranslations() {
  const dictionary = t();
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (typeof dictionary[key] === "string") {
      node.textContent = dictionary[key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (typeof dictionary[key] === "string") {
      node.placeholder = dictionary[key];
    }
  });
  if (viewTitle) {
    viewTitle.textContent = dictionary.views[state.view];
  }
  renderPublicHome();
  renderCurrentUser();
}

function renderPublicHome() {
  const dictionary = t();
  if (publicLanguage) {
    publicLanguage.textContent = state.language.toUpperCase();
    publicLanguage.setAttribute("aria-label", dictionary.public_language_label);
    publicLanguage.title = dictionary.public_language_label;
  }
  if (registerEntry) {
    registerEntry.textContent = dictionary.public_register;
  }
  if (adminEntry) {
    adminEntry.textContent = dictionary.public_admin;
  }
}

function setLanguage(language) {
  if (!dictionaries[language]) return;
  state.language = language;
  localStorage.setItem("autocrew_language", state.language);
  if (languageSelect) {
    languageSelect.value = state.language;
  }
  render();
}

function switchPublicLanguage() {
  const currentIndex = languageOrder.indexOf(state.language);
  const nextLanguage = languageOrder[(currentIndex + 1) % languageOrder.length] || "ro";
  setLanguage(nextLanguage);
}

function renderCurrentUser() {
  const user = getCurrentUser();
  if (!user || !currentUserName || !currentUserRole) return;
  currentUserName.textContent = user.name;
  currentUserRole.textContent = roleLabel(user.role);
}

function renderProfile() {
  const user = getCurrentUser();
  const member = findCurrentTeamMember();
  if (!user || !profileForm || !member) return;

  setProfileImagePreview(member[0], member[3], pendingProfileImagePreview);
  profileName.textContent = member[0];
  profileRole.textContent = `${member[1]} - ${roleLabel(member[2])}`;
  profileEmail.value = member[3];
  profilePassword.value = "";
  if (profilePhotoHint) {
    profilePhotoHint.textContent = pendingProfileImageFile ? pendingProfileImageFile.name : t().profile_photo_hint;
  }
}

function applyPermissions() {
  document.querySelectorAll('[data-view="team"]').forEach((button) => {
    button.hidden = !canViewTeam();
  });

  document.querySelectorAll("[data-add]").forEach((button) => {
    button.hidden = !canManage(button.dataset.add);
  });

  document.querySelectorAll("[data-edit]").forEach((button) => {
    button.hidden = !canManage(button.dataset.edit);
  });

  document.querySelectorAll("[data-delete]").forEach((button) => {
    button.hidden = !canManage(button.dataset.delete);
  });

  if (carsImportButton) {
    carsImportButton.hidden = !canManage("cars");
  }

  if (carsClearButton) {
    carsClearButton.hidden = !canManage("cars");
  }
}

function renderEvents() {
  if (!eventList || !eventsTable) return;

  eventList.innerHTML = t().events
    .map(([name, location, type, owner, status, percent]) => `
      <article class="event-row">
        <div class="event-main"><strong>${escapeHtml(name)}</strong><span>${escapeHtml(location)} - ${escapeHtml(type)}</span></div>
        <div class="event-meta">${t().responsible}: <strong>${escapeHtml(owner)}</strong></div>
        <span class="status-pill ${statusClass(status)}">${escapeHtml(status)}</span>
        <div class="progress" aria-label="${percent}%"><small>${percent}%</small><div class="progress-track"><div class="progress-fill" style="width: ${percent}%"></div></div></div>
      </article>
    `)
    .join("");

  eventsTable.innerHTML = t().events
    .map(([name, location, type, owner, status], index) => `
      <article class="table-row">
        <div><strong>${escapeHtml(name)}</strong><span>${escapeHtml(location)}</span></div>
        <span>${escapeHtml(type)}</span>
        <span class="status-pill ${statusClass(status)}">${escapeHtml(status)}</span>
        <div class="row-actions">
          <button class="small-action" type="button" data-edit="events" data-index="${index}">${t().edit}</button>
          <button class="small-action danger-action" type="button" data-delete="events" data-index="${index}">${t().delete}</button>
        </div>
      </article>
    `)
    .join("");
}

function normalizedCarRow(row) {
  return row.length === 6 ? [row[0], row[1], "-", row[2], row[3], row[4], row[5]] : row;
}

function renderCars() {
  if (!carsTable) return;

  const query = carsSearch ? carsSearch.value.trim().toLowerCase() : "";
  const cars = t().cars
    .map((row, originalIndex) => ({
      data: normalizedCarRow(row),
      index: originalIndex,
    }))
    .filter((item) => item.data.join(" ").toLowerCase().includes(query));

  if (cars.length === 0) {
    carsTable.innerHTML = `<div class="empty-state">${t().cars_empty}</div>`;
    renderDashboardHome();
    return;
  }

  carsTable.innerHTML = cars
    .map(({ data: row, index }) => {
      const [car, driver, phone, plate, zone, category, status] = row;
      return `
      <article class="table-row">
        <div><strong>${escapeHtml(car)}</strong><span>${escapeHtml(driver)} - ${escapeHtml(phone)} - ${escapeHtml(plate)} - ${escapeHtml(zone)}</span></div>
        <span>${escapeHtml(category)}</span>
        <select class="status-select" data-car-status="${index}">
          ${["Invitat", "Sosit", "Plecat"]
            .map((option) => `<option value="${escapeHtml(option)}" ${option === status ? "selected" : ""}>${escapeHtml(option)}</option>`)
            .join("")}
        </select>
        <div class="row-actions">
          <button class="small-action" type="button" data-edit="cars" data-index="${index}">${t().edit}</button>
          <button class="small-action danger-action" type="button" data-delete="cars" data-index="${index}">${t().delete}</button>
        </div>
      </article>
    `;
    })
    .join("");
  renderDashboardHome();
}

function renderPriorityTasks() {
  if (!priorityList) return;

  const tasks = t().tasks
    .map((task, index) => ({ task, index }))
    .sort((a, b) => taskPriorityRank(a.task[2]) - taskPriorityRank(b.task[2]))
    .slice(0, 5);

  priorityList.innerHTML = tasks
    .map(({ task: [task, owner, priority, dueDate, status, takenBy], index }) =>
      buildTaskMarkup(task, owner, priority, dueDate, status, takenBy, index),
    )
    .join("");
}

function renderTaskList() {
  if (!tasksTable) return;

  tasksTable.innerHTML = t().tasks
    .map(([task, owner, priority, dueDate, status, takenBy], index) => buildTaskMarkup(task, owner, priority, dueDate, status, takenBy, index))
    .join("");
}

function buildTaskMarkup(task, owner, priority, dueDate, status, takenBy, index) {
  const currentUser = getCurrentUser();
  const taken = Boolean(takenBy);
  const takenByCurrentUser = takenBy && currentUser?.name === takenBy;
  const done = status === t().task_done;
  const takeLabel = takenByCurrentUser ? t().task_taken_mine : taken ? `${t().task_taken_by} ${takenBy}` : t().take_task;
  const normalizedPriority = normalizeTaskPriority(priority);
  const priorityClass = taskPriorityClass(normalizedPriority);

  return `
        <article class="task-item">
          <div class="task-top"><strong>${escapeHtml(task)}</strong><span class="priority ${priorityClass}">${escapeHtml(normalizedPriority)}</span></div>
          <span>${t().responsible}: ${escapeHtml(owner)}</span>
          ${dueDate ? `<span class="task-due">${escapeHtml(t().task_due)}: ${escapeHtml(dueDate)}</span>` : ""}
          ${
            taken
              ? `<span class="task-owner">${escapeHtml(t().task_taken_by)}: ${escapeHtml(takenBy)} - ${escapeHtml(status || t().task_in_progress)}</span>`
              : ""
          }
          <div class="row-actions">
            ${
              takenByCurrentUser && !done
                ? `
                  <button class="small-action finish-action" type="button" data-finish-task="${index}">${escapeHtml(t().finish_task)}</button>
                  <button class="small-action" type="button" data-cancel-task="${index}">${escapeHtml(t().cancel_task_take)}</button>
                `
                : `<button class="small-action take-action" type="button" data-take-task="${index}" ${taken || !currentUser ? "disabled" : ""}>${escapeHtml(done ? t().task_done : takeLabel)}</button>`
            }
            <button class="small-action" type="button" data-edit="tasks" data-index="${index}">${t().edit}</button>
            <button class="small-action danger-action" type="button" data-delete="tasks" data-index="${index}">${t().delete}</button>
          </div>
        </article>
      `;
}

function renderTasks() {
  renderPriorityTasks();
  renderTaskList();
  renderDashboardHome();
}

function takeTask(index) {
  const user = getCurrentUser();
  const task = t().tasks[index];
  if (!user || !task || task[5]) return;

  task[4] = t().task_in_progress;
  task[5] = user.name;
  saveData();
  renderTasks();
}

function finishTask(index) {
  const user = getCurrentUser();
  const task = t().tasks[index];
  if (!user || !task || task[5] !== user.name) return;

  task[4] = t().task_done;
  saveData();
  renderTasks();
}

function cancelTaskTake(index) {
  const user = getCurrentUser();
  const task = t().tasks[index];
  if (!user || !task || task[5] !== user.name) return;

  task[4] = "";
  task[5] = "";
  saveData();
  renderTasks();
}

function renderTeam() {
  if (!teamList) return;

  teamList.innerHTML = t().team
    .map(([name, role, access, email], index) => `
      <article class="team-member">
        <div class="avatar">${escapeHtml(initials(name))}</div>
        <div>
          <strong>${escapeHtml(name)}</strong>
          <span>${escapeHtml(role)} - ${escapeHtml(access)}</span>
          <span>${escapeHtml(email)}</span>
        </div>
        <div class="row-actions">
          <button class="small-action" type="button" data-edit="team" data-index="${index}">${t().edit}</button>
          <button class="small-action danger-action" type="button" data-delete="team" data-index="${index}">${t().delete}</button>
        </div>
      </article>
    `)
    .join("");
}

function renderResources() {
  if (!resourceList) return;

  resourceList.innerHTML = t().resources
    .map(([title, description, status], index) => `
      <article class="resource-card">
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(description)}</span>
        <span class="status-pill status-progress">${escapeHtml(status)}</span>
        <div class="row-actions">
          <button class="small-action" type="button" data-edit="resources" data-index="${index}">${t().edit}</button>
          <button class="small-action danger-action" type="button" data-delete="resources" data-index="${index}">${t().delete}</button>
        </div>
      </article>
    `)
    .join("");
}

function taskDaysUntil(dueDate) {
  if (!dueDate) return null;
  const due = new Date(`${dueDate}T00:00:00`);
  if (Number.isNaN(due.getTime())) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((due - today) / 86400000);
}

function isTaskFinished(task) {
  return String(task[4] || "").toLowerCase() === String(t().task_done || "").toLowerCase();
}

function renderDashboardHome() {
  const dictionary = t();
  const cars = dictionary.cars.map(normalizedCarRow);
  const activeTasks = dictionary.tasks.filter((task) => !isTaskFinished(task));
  const overdueTasks = activeTasks.filter((task) => {
    const days = taskDaysUntil(task[3]);
    return days !== null && days < 0;
  }).length;
  const dueSoonTasks = activeTasks.filter((task) => {
    const days = taskDaysUntil(task[3]);
    return days !== null && days >= 0 && days <= 2;
  }).length;
  const missingPhone = cars.filter(([, , phone]) => !phone || phone === "-").length;
  const missingPlate = cars.filter(([, , , plate]) => !plate || plate === "-").length;
  const resourceNeeds = dictionary.resources.filter(([, , status]) => {
    const value = String(status || "").toLowerCase();
    return ["confirm", "lucru", "risk", "risc"].some((word) => value.includes(word));
  }).length;

  if (opsAlerts) {
    const alerts = [
      [overdueTasks, dictionary.alert_overdue, "danger"],
      [dueSoonTasks, dictionary.alert_due_soon, "warning"],
      [missingPhone, dictionary.alert_missing_phone, "info"],
      [missingPlate, dictionary.alert_missing_plate, "info"],
      [resourceNeeds, dictionary.alert_resources, "warning"],
    ].filter(([count]) => count > 0);

    opsAlerts.innerHTML = alerts.length
      ? alerts.map(([count, label, tone]) => `
        <article class="ops-alert ${tone}">
          <strong>${escapeHtml(count)}</strong>
          <span>${escapeHtml(label)}</span>
        </article>
      `).join("")
      : `<article class="ops-alert good"><strong>OK</strong><span>${escapeHtml(dictionary.alert_all_good)}</span></article>`;
  }

  if (zoneStatus) {
    const zones = cars.reduce((acc, row) => {
      const zone = row[4] || dictionary.no_zone;
      acc[zone] ||= { total: 0, arrived: 0, invited: 0 };
      acc[zone].total += 1;
      if (row[6] === "Sosit") acc[zone].arrived += 1;
      if (row[6] === "Invitat") acc[zone].invited += 1;
      return acc;
    }, {});

    zoneStatus.innerHTML = Object.keys(zones).length
      ? Object.entries(zones).map(([zone, data]) => `
        <article class="zone-card">
          <strong>${escapeHtml(zone)}</strong>
          <span>${escapeHtml(data.total)} auto</span>
          <small>${escapeHtml(data.arrived)} ${escapeHtml(dictionary.zone_arrived)} / ${escapeHtml(data.invited)} ${escapeHtml(dictionary.zone_invited)}</small>
        </article>
      `).join("")
      : `<div class="empty-state">${escapeHtml(dictionary.cars_empty)}</div>`;
  }

  if (eventTimeline) {
    eventTimeline.innerHTML = dictionary.event_plan
      .map(([time, title, description]) => `
        <article class="timeline-item">
          <strong>${escapeHtml(time)}</strong>
          <div>
            <span>${escapeHtml(title)}</span>
            <small>${escapeHtml(description)}</small>
          </div>
        </article>
      `)
      .join("");
  }

  if (quickContacts) {
    quickContacts.innerHTML = dictionary.team.length
      ? dictionary.team.slice(0, 4).map(([name, role, access, email]) => `
        <article class="contact-card">
          <div class="avatar">${escapeHtml(initials(name))}</div>
          <div>
            <strong>${escapeHtml(name)}</strong>
            <span>${escapeHtml(role)} - ${escapeHtml(access)}</span>
            <small>${escapeHtml(email)}</small>
          </div>
        </article>
      `).join("")
      : `<div class="empty-state">${escapeHtml(dictionary.empty_contacts)}</div>`;
  }
}

function renderMetrics() {
  const riskWords = ["risc", "risk", "риск"];
  const riskCount = t().events.filter((event) => {
    const status = String(event[4]).toLowerCase();
    return riskWords.some((word) => status.includes(word));
  }).length;

  const counts = {
    events: t().events.length,
    tasks: t().tasks.filter((task) => !isTaskFinished(task)).length,
    team: t().team.length,
    risks: riskCount,
  };

  Object.entries(counts).forEach(([key, value]) => {
    const node = document.querySelector(`[data-count="${key}"]`);
    if (node) node.textContent = value;
  });
}

function closeModal() {
  document.querySelector(".modal-backdrop")?.remove();
}

function editorValues(kind, values) {
  if (kind === "cars" && values.length === 4) {
    return [values[1], values[0], "", "", "Zona A", values[2], values[3]];
  }
  if (kind === "cars" && values.length === 6) {
    return [values[1], values[0], "", values[2], values[3], values[4], values[5]];
  }
  if (kind === "cars" && values.length === 7) {
    return [values[1], values[0], values[2], values[3], values[4], values[5], values[6]];
  }
  if (kind === "tasks") {
    return [values[0], values[1], normalizeTaskPriority(values[2]), values[3]];
  }
  return values;
}

function storageValues(kind, values) {
  if (kind === "cars") {
    return [values[1], values[0], values[2], values[3], values[4], values[5], values[6]];
  }
  if (kind === "tasks") {
    return [values[0], values[1], normalizeTaskPriority(values[2]), values[3]];
  }
  return values;
}

function openEditor(kind, index = null) {
  const config = formConfigs[kind];
  const collection = t()[kind];
  if (!config || !collection || !canManage(kind)) return;

  const isEdit = Number.isInteger(index);
  const values = isEdit ? editorValues(kind, collection[index]) : [];
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <section class="modal" role="dialog" aria-modal="true">
      <div class="modal-header">
        <h2>${escapeHtml(isEdit ? uiText("edit") : uiText("add"))} ${escapeHtml(labelText(config.title))}</h2>
        <button class="modal-close" type="button" aria-label="${escapeHtml(uiText("close"))}">×</button>
      </div>
      <form class="modal-form">
        ${config.fields
          .map((field, fieldIndex) => `
            <label>
              <span>${escapeHtml(labelText(field.label))}</span>
              ${
                field.type === "select"
                  ? `<select name="field-${fieldIndex}" required>
                      ${field.options
                        .map((option) => `<option value="${escapeHtml(option)}" ${option === values[fieldIndex] ? "selected" : ""}>${escapeHtml(option)}</option>`)
                        .join("")}
                    </select>`
                  : `<input
                      type="${field.type || "text"}"
                      name="field-${fieldIndex}"
                      value="${escapeHtml(values[fieldIndex] ?? "")}"
                      placeholder="${escapeHtml(field.placeholder)}"
                      ${field.min !== undefined ? `min="${field.min}"` : ""}
                      ${field.max !== undefined ? `max="${field.max}"` : ""}
                      required
                    />`
              }
            </label>
          `)
          .join("")}
        <div class="modal-actions">
          <button class="ghost-action" type="button" data-modal-cancel>${escapeHtml(uiText("cancel"))}</button>
          <button class="primary-action" type="submit">${escapeHtml(uiText("save"))}</button>
        </div>
      </form>
    </section>
  `;

  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop || event.target.closest(".modal-close") || event.target.closest("[data-modal-cancel]")) {
      closeModal();
    }
  });

  backdrop.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const nextValues = config.fields.map((field, fieldIndex) => {
      const input = event.currentTarget.elements[`field-${fieldIndex}`];
      if (field.type === "number") {
        return Math.max(field.min ?? 0, Math.min(field.max ?? 100, Number(input.value)));
      }
      return input.value.trim();
    });

    let storedValues = storageValues(kind, nextValues);
    if (isEdit && kind === "tasks") {
      storedValues = [...storedValues, ...collection[index].slice(config.fields.length)];
    }

    if (isEdit) {
      collection[index] = storedValues;
    } else {
      collection.unshift(storedValues);
      if (kind === "tasks") {
        addNotification(`Sarcina "${storedValues[0]}" a fost creata.`);
      }
    }

    saveData();
    closeModal();
    render();
  });

  document.body.append(backdrop);
  backdrop.querySelector("input")?.focus();
}

function deleteItem(kind, index) {
  const collection = t()[kind];
  if (!collection || !canManage(kind)) return;
  if (!window.confirm(t().delete_confirm)) return;

  collection.splice(index, 1);
  saveData();
  render();
}

function render() {
  renderTranslations();
  renderMetrics();
  renderCars();
  renderEvents();
  renderTasks();
  renderTeam();
  renderResources();
  renderProfile();
  applyPermissions();
}

function showView(view) {
  if (view === "team" && !canViewTeam()) {
    view = "dashboard";
  }
  state.view = view;
  adminApp?.setAttribute("data-active-view", view);
  localStorage.setItem("kultura_last_view", view);
  if (profileSuccess) profileSuccess.classList.remove("visible");
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });
  document.querySelectorAll(".admin-view").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === view);
  });
  viewTitle.textContent = t().views[view];
  renderProfile();
}

function showAdmin() {
  publicHome?.classList.add("is-hidden");
  loginScreen.classList.add("is-hidden");
  adminApp.classList.remove("is-hidden");
  render();
}

function showHome() {
  adminApp.classList.add("is-hidden");
  loginScreen.classList.add("is-hidden");
  publicHome?.classList.remove("is-hidden");
}

function showLogin() {
  publicHome?.classList.add("is-hidden");
  adminApp.classList.add("is-hidden");
  loginScreen.classList.remove("is-hidden");
  setAuthMode("login");
}

function updatePublicNavState() {
  publicNav?.classList.toggle("is-solid", window.scrollY > 20);
}

window.addEventListener("scroll", updatePublicNavState, { passive: true });
updatePublicNavState();

publicLanguage?.addEventListener("click", switchPublicLanguage);

adminEntry?.addEventListener("click", showLogin);

registerEntry?.addEventListener("click", () => {
  showLogin();
  setAuthMode("register");
});

document.querySelectorAll(".ticket-action").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.authMode === "register") return;
    showToast("In curand aici vom conecta formularul pentru participanti si bilete.", "info");
  });
});

showRegisterButton?.addEventListener("click", () => {
  setAuthMode("register");
});

showLoginButton?.addEventListener("click", () => {
  setAuthMode("login");
});

loginForm?.addEventListener("input", () => {
  formError?.classList.remove("visible");
});

registerForm?.addEventListener("input", () => {
  clearFormError(registerError);
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = loginForm.querySelector('button[type="submit"]');
  const email = normalizeEmail(document.querySelector("#email").value);
  const password = document.querySelector("#password").value;

  clearFormError(formError);
  setSubmitLoading(submitButton, true, t().login_button);
  const { user: authUser, error } = await signInWithSupabase(email, password);
  setSubmitLoading(submitButton, false);

  if (error || !authUser) {
    setFormError(formError, authErrorMessage(error));
    return;
  }

  const { user, saved, error: saveError } = await ensureTeamMemberForAuthUser(authUser, "", email);
  if (saved && user) {
    loginUser(user);
    return;
  }

  await supabaseClient?.auth.signOut();
  setFormError(formError, saveError || t().register_error_supabase);
});

registerForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = registerForm.querySelector('button[type="submit"]');
  const name = document.querySelector("#register-name").value.trim();
  const email = normalizeEmail(document.querySelector("#register-email").value);
  const password = document.querySelector("#register-password").value.trim();
  const passwordConfirm = document.querySelector("#register-password-confirm").value.trim();

  clearFormError(registerError);

  if (name.length < 2) {
    setFormError(registerError, t().register_error_name);
    return;
  }

  if (password.length < 6) {
    setFormError(registerError, t().register_error_short);
    return;
  }

  if (password !== passwordConfirm) {
    setFormError(registerError, t().register_error_password);
    return;
  }

  setSubmitLoading(submitButton, true, t().register_submit);
  const { user: authUser, session, error, existingAccount } = await signUpWithSupabase(email, password, name);

  if (error || existingAccount) {
    setSubmitLoading(submitButton, false);
    setFormError(registerError, existingAccount ? t().auth_error_existing_account : authErrorMessage(error));
    return;
  }

  registerForm.reset();
  if (session) {
    const { user, saved, error: saveError } = await ensureTeamMemberForAuthUser(authUser, name, email);
    setSubmitLoading(submitButton, false);
    if (!saved || !user) {
      setFormError(registerError, saveError || t().register_error_supabase);
      return;
    }
    loginUser(user);
    return;
  }

  setSubmitLoading(submitButton, false);
  setFormError(registerError, t().auth_error_confirmation_required);
});

document.querySelector("#logout-button").addEventListener("click", async () => {
  await supabaseClient?.auth.signOut();
  clearStoredSession();
  showHome();
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.view);
    navMenu?.classList.remove("open");
    closeNotificationsPanel();
  });
});

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    navMenu.classList.toggle("open");
  });
}

document.querySelectorAll("[data-view-shortcut]").forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.viewShortcut);
  });
});

languageSelect.value = state.language;
languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

if (carsSearch) {
  carsSearch.addEventListener("input", renderCars);
}

notificationsButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleNotificationsPanel();
});

window.addEventListener("resize", () => {
  if (notificationsPanel?.classList.contains("open")) {
    positionNotificationsPanel();
  }
});

clearNotificationsButton?.addEventListener("click", () => {
  state.notifications = [];
  renderNotifications();
  closeNotificationsPanel();
});

document.addEventListener("click", (event) => {
  if (!notificationsPanel?.contains(event.target) && !notificationsButton?.contains(event.target)) {
    closeNotificationsPanel();
  }
});

if (carsImportButton && carsImportFile) {
  carsImportButton.addEventListener("click", () => {
    if (!canManage("cars")) return;
    carsImportFile.click();
  });

  carsImportFile.addEventListener("change", async () => {
    const files = Array.from(carsImportFile.files);
    if (files.length === 0) return;

    try {
      const importedCars = [];
      for (const file of files) {
        const fallbackName = fileBaseName(file.name);
        const parsed = file.name.toLowerCase().endsWith(".xlsx")
          ? await parseCarsXlsx(await file.arrayBuffer(), fallbackName)
          : parseCarsCsv(await file.text(), fallbackName);
        importedCars.push(...parsed);
      }
      if (importedCars.length === 0) {
        showToast(t().cars_import_error, "warning");
        carsImportFile.value = "";
        return;
      }

      t().cars.unshift(...importedCars);
      saveData();
      renderCars();
      renderMetrics();
      applyPermissions();
      carsImportFile.value = "";
    } catch (error) {
      showToast(t().cars_import_error, "error");
      carsImportFile.value = "";
    }
  });
}

if (carsClearButton) {
  carsClearButton.addEventListener("click", () => {
    if (!canManage("cars")) return;
    if (!window.confirm(t().clear_cars_confirm)) return;

    t().cars = [];
    saveData();
    renderCars();
    renderMetrics();
  });
}

profilePhotoButton?.addEventListener("click", () => {
  profilePhotoInput?.click();
});

profilePhotoInput?.addEventListener("change", async () => {
  const file = profilePhotoInput.files?.[0];
  if (!file) return;

  const validationError = validateProfileImage(file);
  if (validationError) {
    pendingProfileImageFile = null;
    pendingProfileImagePreview = "";
    profilePhotoInput.value = "";
    showToast(validationError, "error");
    renderProfile();
    return;
  }

  try {
    pendingProfileImageFile = file;
    pendingProfileImagePreview = await readFileAsDataUrl(file);
    const member = findCurrentTeamMember();
    if (member) {
      setProfileImagePreview(member[0], member[3], pendingProfileImagePreview);
    }
    if (profilePhotoHint) profilePhotoHint.textContent = file.name;
  } catch (error) {
    pendingProfileImageFile = null;
    pendingProfileImagePreview = "";
    showToast(t().profile_photo_invalid, "error");
    renderProfile();
  }
});

if (profileForm) {
  profileForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const user = getCurrentUser();
    if (!user) return;

    const oldEmail = normalizeEmail(user.email);
    const nextEmail = normalizeEmail(profileEmail.value);
    const nextPassword = profilePassword.value.trim();
    const authUpdates = {};
    let updatedUser = null;
    let savedProfileImage = "";

    if (nextPassword && nextPassword.length < 6) {
      showToast(t().register_error_short, "error");
      return;
    }

    if (nextEmail && nextEmail.toLowerCase() !== oldEmail) {
      authUpdates.email = nextEmail;
    }

    if (nextPassword) {
      authUpdates.password = nextPassword;
    }

    if (Object.keys(authUpdates).length > 0) {
      if (!supabaseClient) {
        showToast(t().auth_error, "error");
        return;
      }

      const { error } = await supabaseClient.auth.updateUser(authUpdates, {
        emailRedirectTo: getAuthRedirectUrl(),
      });
      if (error) {
        showToast(authErrorMessage(error), "error");
        return;
      }
    }

    Object.values(dictionaries).forEach((dictionary) => {
      const member = dictionary.team.find((item) => normalizeEmail(item[3]) === oldEmail);
      if (!member) return;
      member[3] = nextEmail;
      updatedUser = { name: member[0], email: nextEmail, role: member[2] };
    });

    if (!updatedUser) return;
    if (pendingProfileImageFile && pendingProfileImagePreview) {
      try {
        savedProfileImage = await uploadProfileImageToStorage(pendingProfileImageFile, nextEmail);
      } catch (error) {
        console.warn("Poza de profil nu a putut fi salvata in Supabase Storage.", error);
        showToast(t().profile_photo_upload_error, "error", 5200);
      }
      savedProfileImage ||= pendingProfileImagePreview;
    }

    if (savedProfileImage) {
      delete state.profileImages[profileImageKey(oldEmail)];
      state.profileImages[profileImageKey(nextEmail)] = savedProfileImage;
      pendingProfileImageFile = null;
      pendingProfileImagePreview = "";
      if (profilePhotoInput) profilePhotoInput.value = "";
    } else if (nextEmail.toLowerCase() !== oldEmail && state.profileImages[profileImageKey(oldEmail)]) {
      state.profileImages[profileImageKey(nextEmail)] = state.profileImages[profileImageKey(oldEmail)];
      delete state.profileImages[profileImageKey(oldEmail)];
    }

    localStorage.setItem("kultura_current_user", JSON.stringify(updatedUser));
    saveData();
    profilePassword.value = "";
    render();
    profileSuccess.classList.add("visible");
  });
}

document.addEventListener("change", (event) => {
  const statusSelect = event.target.closest("[data-car-status]");
  if (!statusSelect || !canManage("cars")) return;

  const index = Number(statusSelect.dataset.carStatus);
  const car = t().cars[index];
  if (!car) return;

  car[car.length === 7 ? 6 : 5] = statusSelect.value;
  saveData();
  renderCars();
  applyPermissions();
});

document.querySelectorAll("[data-add]").forEach((button) => {
  button.addEventListener("click", () => openEditor(button.dataset.add));
});

document.addEventListener("click", (event) => {
  if (navMenu && !event.target.closest(".nav-menu")) {
    navMenu.classList.remove("open");
  }

  const deleteButton = event.target.closest("[data-delete]");
  if (deleteButton) {
    deleteItem(deleteButton.dataset.delete, Number(deleteButton.dataset.index));
    return;
  }

  const takeTaskButton = event.target.closest("[data-take-task]");
  if (takeTaskButton) {
    takeTask(Number(takeTaskButton.dataset.takeTask));
    return;
  }

  const finishTaskButton = event.target.closest("[data-finish-task]");
  if (finishTaskButton) {
    finishTask(Number(finishTaskButton.dataset.finishTask));
    return;
  }

  const cancelTaskButton = event.target.closest("[data-cancel-task]");
  if (cancelTaskButton) {
    cancelTaskTake(Number(cancelTaskButton.dataset.cancelTask));
    return;
  }

  const editButton = event.target.closest("[data-edit]");
  if (!editButton) return;
  openEditor(editButton.dataset.edit, Number(editButton.dataset.index));
});

async function initializeApp() {
  const hadAuthRedirect = hasAuthRedirectHash();
  const redirectError = authRedirectErrorMessage();
  const redirectSession = hadAuthRedirect && !redirectError ? await getActiveSupabaseSession() : null;
  if (hadAuthRedirect) {
    clearAuthRedirectHash();
  }

  await loadDataFromSupabase();
  normalizeTeamRows();
  normalizeCarStatuses();
  normalizeTaskRows();
  if (shouldSaveNormalizedTeamRows) {
    await saveData({ requireSupabase: Boolean(supabaseClient) });
    shouldSaveNormalizedTeamRows = false;
  }
  renderTranslations();

  if (redirectError) {
    await supabaseClient?.auth.signOut();
    clearStoredSession();
    showLogin();
    setFormError(formError, redirectError);
    return;
  }

  const session = redirectSession || (await getActiveSupabaseSession());
  const authUser = session?.user || null;
  const authEmail = authUser?.email || "";
  const savedMember = authEmail ? findTeamMemberByEmail(authEmail) : null;
  if (savedMember) {
    const refreshedUser = userFromTeamMember(savedMember);
    localStorage.setItem("autocrew_logged_in", "yes");
    localStorage.setItem("kultura_current_user", JSON.stringify({
      name: refreshedUser.name,
      email: refreshedUser.email,
      role: refreshedUser.role,
    }));
    state.view = localStorage.getItem("kultura_last_view") || "dashboard";
    showAdmin();
    showView(state.view);
    return;
  }

  if (authUser) {
    const { user, saved, error: saveError } = await ensureTeamMemberForAuthUser(authUser, "", authEmail);
    if (saved && user) {
      localStorage.setItem("autocrew_logged_in", "yes");
      localStorage.setItem("kultura_current_user", JSON.stringify({
        name: user.name,
        email: normalizeEmail(user.email),
        role: user.role,
      }));
      state.view = localStorage.getItem("kultura_last_view") || "dashboard";
      showAdmin();
      showView(state.view);
      return;
    }
    if (saveError) {
      console.warn("Utilizator autentificat, dar membrul nu a putut fi salvat.", saveError);
    }
  }

  await supabaseClient?.auth.signOut();
  clearStoredSession();
  showHome();
}

initializeApp();
