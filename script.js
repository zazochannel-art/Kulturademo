const supabaseConfig = {
  url: "https://jxlqrbpqufrouwujboxi.supabase.co",
  anonKey: "sb_publishable_i9CCh1u2dhO11QMPmTucRA_93UUziQ6",
  table: "kultura_admin_state",
  rowId: "main",
};

function createSupabaseClient() {
  const hasConfig = supabaseConfig.url.startsWith("https://") && supabaseConfig.anonKey.length > 20;
  if (!hasConfig || !window.supabase) return null;

  try {
    return window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey);
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
    register_hint: "Contul va fi creat cu acces de observator. Adminul poate modifica accesul din Echipa.",
    back_to_login: "Am deja cont",
    password_confirm_label: "Confirma parola",
    register_error_exists: "Exista deja un cont cu acest email.",
    register_error_password: "Parolele nu coincid.",
    register_error_short: "Parola trebuie sa aiba cel putin 4 caractere.",
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
      ["Victor", "Coordonator logistica", "Admin", "admin@kultura.md", "admin123"],
      ["Ana", "Securitate si pista", "Editor", "ana@kultura.md", "ana123"],
      ["Irina", "Media si comunicare", "Editor", "irina@kultura.md", "irina123"],
      ["Mihai", "Parteneri si autorizatii", "Viewer", "mihai@kultura.md", "mihai123"],
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
    register_hint: "Аккаунт будет создан с доступом наблюдателя. Админ может изменить доступ в Команде.",
    back_to_login: "У меня уже есть аккаунт",
    password_confirm_label: "Подтвердите пароль",
    register_error_exists: "Аккаунт с этим email уже существует.",
    register_error_password: "Пароли не совпадают.",
    register_error_short: "Пароль должен быть не короче 4 символов.",
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
      ["Виктор", "Координатор логистики", "Admin", "admin@kultura.md", "admin123"],
      ["Анна", "Безопасность и трасса", "Editor", "ana@kultura.md", "ana123"],
      ["Ирина", "Медиа и коммуникация", "Editor", "irina@kultura.md", "irina123"],
      ["Михаил", "Партнеры и разрешения", "Viewer", "mihai@kultura.md", "mihai123"],
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
    register_hint: "The account will be created with viewer access. Admin can change access from Team.",
    back_to_login: "I already have an account",
    password_confirm_label: "Confirm password",
    register_error_exists: "An account with this email already exists.",
    register_error_password: "Passwords do not match.",
    register_error_short: "Password must be at least 4 characters.",
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
      ["Victor", "Logistics coordinator", "Admin", "admin@kultura.md", "admin123"],
      ["Ana", "Safety and track", "Editor", "ana@kultura.md", "ana123"],
      ["Irina", "Media and comms", "Editor", "irina@kultura.md", "irina123"],
      ["Mihai", "Partners and permits", "Viewer", "mihai@kultura.md", "mihai123"],
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
};

const roleLabels = {
  ro: { admin: "Admin general", editor: "Coordonator evenimente", viewer: "Observator" },
  ru: { admin: "Главный администратор", editor: "Координатор событий", viewer: "Наблюдатель" },
  en: { admin: "General admin", editor: "Event coordinator", viewer: "Observer" },
};

const dataKeys = ["events", "cars", "tasks", "team", "resources"];

function applyStoredData(storedData) {
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
    Victor: ["admin@kultura.md", "admin123"],
    Ana: ["ana@kultura.md", "ana123"],
    Irina: ["irina@kultura.md", "irina123"],
    Mihai: ["mihai@kultura.md", "mihai123"],
    Виктор: ["admin@kultura.md", "admin123"],
    Анна: ["ana@kultura.md", "ana123"],
    Ирина: ["irina@kultura.md", "irina123"],
    Михаил: ["mihai@kultura.md", "mihai123"],
  };

  Object.values(dictionaries).forEach((dictionary) => {
    dictionary.team = dictionary.team.map((member, index) => {
      const fallback = defaults[member[0]] || [`member${index + 1}@kultura.md`, `pass${index + 1}`];
      const email = String(member[3] || "").trim().toLowerCase();
      const shouldRefreshSeededAdmin = fallback[0] === "admin@kultura.md" && (!email || email === "admin@autocrew.md");

      if (member.length >= 5 && !shouldRefreshSeededAdmin) return member;
      return [member[0], member[1], member[2], fallback[0], member[4] || fallback[1]];
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

function normalizeTaskRows() {
  Object.values(dictionaries).forEach((dictionary) => {
    dictionary.tasks = dictionary.tasks.map((task) => {
      if (task.length >= 6) return task;
      if (task.length === 5) return [task[0], task[1], task[2], "", task[3], task[4]];
      if (task.length === 4 && isDateValue(task[3])) return [task[0], task[1], task[2], task[3], "", ""];
      if (task.length === 4) return [task[0], task[1], task[2], "", task[3], ""];
      return [task[0], task[1], task[2], "", "", ""];
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
      { label: { ro: "Prioritate", ru: "Приоритет", en: "Priority" }, placeholder: "Urgent" },
      { label: { ro: "Termen", ru: "Срок", en: "Due date" }, placeholder: "", type: "date" },
    ],
  },
  team: {
    title: { ro: "membru", ru: "участника", en: "member" },
    fields: [
      { label: { ro: "Nume", ru: "Имя", en: "Name" }, placeholder: "Victor" },
      { label: { ro: "Rol", ru: "Роль", en: "Role" }, placeholder: "Coordonator logistica" },
      { label: { ro: "Acces", ru: "Доступ", en: "Access" }, placeholder: "Admin", type: "select", options: ["Admin", "Editor", "Viewer"] },
      { label: { ro: "Email", ru: "Email", en: "Email" }, placeholder: "admin@kultura.md", type: "email" },
      { label: { ro: "Parola", ru: "Пароль", en: "Password" }, placeholder: "admin123" },
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
const syncStatus = document.querySelector("#sync-status");
const toastContainer = document.querySelector("#toast-container");
const notificationsButton = document.querySelector("#notifications-button");
const notificationsPanel = document.querySelector("#notifications-panel");
const notificationsList = document.querySelector("#notifications-list");
const clearNotificationsButton = document.querySelector("#clear-notifications-button");
const notificationBadge = document.querySelector("#notification-badge");

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
    state.notifications.forEach((item) => { item.read = true; });
    renderNotifications();
  }
}

function closeNotificationsPanel() {
  if (!notificationsPanel || !notificationsButton) return;
  notificationsPanel.classList.remove("open");
  notificationsPanel.setAttribute("aria-hidden", "true");
  notificationsButton.setAttribute("aria-expanded", "false");
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

function userFromTeamMember(member) {
  if (!member) return null;
  const [name, roleDescription, access, memberEmail] = member;
  return { name, email: String(memberEmail).trim(), role: access, roleDescription };
}

function setAuthMode(mode = "login") {
  const isRegister = mode === "register";
  loginForm?.classList.toggle("is-hidden", isRegister);
  registerForm?.classList.toggle("is-hidden", !isRegister);
  formError?.classList.remove("visible");
  if (registerError) {
    registerError.textContent = "";
    registerError.classList.remove("visible");
  }
}

function accessKey(access) {
  return String(access || "").trim().toLowerCase();
}

function roleLabel(role) {
  const key = accessKey(role);
  return roleLabels[state.language][key] || roleLabels.ro[key] || role;
}

function canManage(kind) {
  const user = getCurrentUser();
  const role = accessKey(user?.role);
  if (!user) return false;
  if (role === "admin") return true;
  if (role === "editor") return kind !== "team";
  return false;
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
  const payload = {};
  Object.keys(dictionaries).forEach((language) => {
    payload[language] = {};
    dataKeys.forEach((key) => {
      payload[language][key] = dictionaries[language][key];
    });
  });
  return payload;
}

function saveData() {
  const payload = buildDataPayload();
  localStorage.setItem("kultura_admin_data", JSON.stringify(payload));
  saveDataToSupabase(payload);
}

async function saveDataToSupabase(payload) {
  if (!supabaseClient) {
    setSyncStatus("Supabase: neconfigurat", "error");
    return;
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
    setSyncStatus(`Supabase: eroare ${error.code || ""}`.trim(), "error");
    return;
  }

  if (!data || (Array.isArray(data) && data.length === 0)) {
    setSyncStatus("Supabase: eroare la salvare", "error");
    return;
  }

  setSyncStatus("Supabase: salvat", "ok");
  console.info("Datele au fost salvate in Supabase.");
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

function findTeamUser(email, password) {
  const normalizedEmail = String(email).trim().toLowerCase();
  const normalizedPassword = String(password).trim();
  const dictionariesToSearch = [t(), ...Object.values(dictionaries).filter((dictionary) => dictionary !== t())];
  let member = null;

  dictionariesToSearch.some((dictionary) => {
    member = dictionary.team.find(([, , , memberEmail, memberPassword]) => {
      return String(memberEmail).trim().toLowerCase() === normalizedEmail && String(memberPassword).trim() === normalizedPassword;
    });
    return Boolean(member);
  });

  if (!member) return null;
  return userFromTeamMember(member);
}

function teamEmailExists(email) {
  const normalizedEmail = String(email).trim().toLowerCase();
  return Object.values(dictionaries).some((dictionary) =>
    dictionary.team.some((member) => String(member[3]).trim().toLowerCase() === normalizedEmail),
  );
}

function addRegisteredUser(name, email, password) {
  const roleDescriptions = {
    ro: "Membru inregistrat",
    ru: "Зарегистрированный участник",
    en: "Registered member",
  };
  Object.entries(dictionaries).forEach(([language, dictionary]) => {
    dictionary.team.unshift([
      name,
      roleDescriptions[language] || roleDescriptions.ro,
      "Viewer",
      email,
      password,
    ]);
  });
  saveData();
  return { name, email, role: "Viewer", roleDescription: roleDescriptions[state.language] || roleDescriptions.ro };
}

function findCurrentTeamMember() {
  const user = getCurrentUser();
  if (!user) return null;
  const email = String(user.email).trim().toLowerCase();
  return (
    t().team.find((member) => String(member[3]).trim().toLowerCase() === email) ||
    Object.values(dictionaries)
      .flatMap((dictionary) => dictionary.team)
      .find((member) => String(member[3]).trim().toLowerCase() === email) ||
    null
  );
}

function loginUser(user) {
  localStorage.setItem("autocrew_logged_in", "yes");
  localStorage.setItem("kultura_current_user", JSON.stringify({ name: user.name, email: user.email, role: user.role }));
  formError.classList.remove("visible");
  closeModal();
  showAdmin();
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
  renderCurrentUser();
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

  profileAvatar.textContent = initials(member[0]);
  profileName.textContent = member[0];
  profileRole.textContent = `${member[1]} - ${roleLabel(member[2])}`;
  profileEmail.value = member[3];
  profilePassword.value = member[4];
}

function applyPermissions() {
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

function renderCars() {
  if (!carsTable) return;

  const query = carsSearch ? carsSearch.value.trim().toLowerCase() : "";
  const cars = t().cars
    .map((row, originalIndex) => ({
      data: row.length === 6 ? [row[0], row[1], "-", row[2], row[3], row[4], row[5]] : row,
      index: originalIndex,
    }))
    .filter((item) => item.data.join(" ").toLowerCase().includes(query));

  if (cars.length === 0) {
    carsTable.innerHTML = `<div class="empty-state">${t().cars_empty}</div>`;
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
}

function renderPriorityTasks() {
  if (!priorityList) return;

  const tasks = t().tasks
    .map((task, index) => ({ task, index }))
    .sort((a, b) => {
      const order = { urgent: 0, mediu: 1, medium: 1, normal: 2, low: 3 };
      const aPriority = a.task[2].toString().toLowerCase();
      const bPriority = b.task[2].toString().toLowerCase();
      return (order[aPriority] ?? 2) - (order[bPriority] ?? 2);
    })
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

  return `
        <article class="task-item">
          <div class="task-top"><strong>${escapeHtml(task)}</strong><span class="priority">${escapeHtml(priority)}</span></div>
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
    .map(([name, role, access, email, password], index) => `
      <article class="team-member">
        <div class="avatar">${escapeHtml(initials(name))}</div>
        <div>
          <strong>${escapeHtml(name)}</strong>
          <span>${escapeHtml(role)} - ${escapeHtml(access)}</span>
          <span>${escapeHtml(email)} - ${escapeHtml(password)}</span>
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

function renderMetrics() {
  const riskWords = ["risc", "risk", "риск"];
  const riskCount = t().events.filter((event) => {
    const status = String(event[4]).toLowerCase();
    return riskWords.some((word) => status.includes(word));
  }).length;

  const counts = {
    events: t().events.length,
    tasks: t().tasks.length,
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
  return values;
}

function storageValues(kind, values) {
  if (kind === "cars") {
    return [values[1], values[0], values[2], values[3], values[4], values[5], values[6]];
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
  state.view = view;
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

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const user = findTeamUser(email, password);

  if (user) {
    loginUser(user);
    return;
  }

  formError.classList.add("visible");
});

registerForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#register-name").value.trim();
  const email = document.querySelector("#register-email").value.trim();
  const password = document.querySelector("#register-password").value.trim();
  const passwordConfirm = document.querySelector("#register-password-confirm").value.trim();

  if (password.length < 4) {
    registerError.textContent = t().register_error_short;
    registerError.classList.add("visible");
    return;
  }

  if (password !== passwordConfirm) {
    registerError.textContent = t().register_error_password;
    registerError.classList.add("visible");
    return;
  }

  if (teamEmailExists(email)) {
    registerError.textContent = t().register_error_exists;
    registerError.classList.add("visible");
    return;
  }

  const user = addRegisteredUser(name, email, password);
  registerForm.reset();
  loginUser(user);
});

document.querySelector("#logout-button").addEventListener("click", () => {
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
  state.language = event.target.value;
  localStorage.setItem("autocrew_language", state.language);
  render();
});

if (carsSearch) {
  carsSearch.addEventListener("input", renderCars);
}

notificationsButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleNotificationsPanel();
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

if (profileForm) {
  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = getCurrentUser();
    if (!user) return;

    const oldEmail = String(user.email).trim().toLowerCase();
    const nextEmail = profileEmail.value.trim();
    const nextPassword = profilePassword.value.trim();
    let updatedUser = null;

    Object.values(dictionaries).forEach((dictionary) => {
      const member = dictionary.team.find((item) => String(item[3]).trim().toLowerCase() === oldEmail);
      if (!member) return;
      member[3] = nextEmail;
      member[4] = nextPassword;
      updatedUser = { name: member[0], email: nextEmail, role: member[2] };
    });

    if (!updatedUser) return;
    localStorage.setItem("kultura_current_user", JSON.stringify(updatedUser));
    saveData();
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
  await loadDataFromSupabase();
  normalizeTeamRows();
  normalizeCarStatuses();
  normalizeTaskRows();
  renderTranslations();

  const savedUser = getCurrentUser();
  const savedMember = savedUser ? findCurrentTeamMember() : null;
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

  clearStoredSession();
  showHome();
}

initializeApp();
