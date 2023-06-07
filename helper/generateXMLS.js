import {json2xml} from "xml-js";

export default function (form) {
  const specialist = {
    id: (Math.random() + 1).toString(36).substring(7),
    name: form.name,
    surname: form.surname,
    middlename: form.middlename,
    citizenship: form.citizenship,
    gender: form.gender,
    country: form.country?.title,
    city: form.city?.title,
    specialization: form.specialization?.title,
    grade: form.grade?.title,
    phone: Boolean(form.phone) ? `+${(form.phone || '').replace(/\D+/g, "")}` : null,
    email: form.grade?.email || null,


    birth_date: null,
    citizenship: null,
    avatar: null,
    social_links: null,
    certificates: null,
    inn: null,
    passport: {
      seriesAndNumber: null,
      extraData: null
    },
    reservations: {
      start_period: null,
      end_period: null,
    },
    team_only_reserve: null,
  };

  let key_skill = [];
  form.key_skill.map((t) => {
    key_skill.push(t.title)
  });
  specialist.key_skills = Boolean(key_skill.length) ? {key_skill} : null;

  specialist.description = form.description;

  let work_industry = [];
  (form.work_industries || []).map((t) => {
    work_industry.push(t.title)
  });
  specialist.work_industries = Boolean(work_industry.length) ? {work_industry} : null;

  let category = [];
  (form.categories || []).map((t) => {
    category.push(t.name)
  });
  specialist.categories = Boolean(category.length) ? {category} : null;

  let language = [];
  (form.languages || []).map((t) => {
    language.push({
      language: t.title?.title,
      level: t.level?.id,
    })
  });
  specialist.languages = Boolean(language.length) ? {language} : null;

  let project = [];
  (form.projects || []).map((t) => {
    project.push({
      title: t.title,
      role: t.role,
      description: t.description,
      start: t.start,
      finish: t.finishCurrent ? null : t.finish,
    })
  });
  specialist.projects = Boolean(project.length) ? {project} : null;

  let education = [];
  (form.educations || []).map((t) => {
    education.push({
      level: t.level,
      educationOrganization: t.educationOrganization,
      qualification: t.qualification,
      finishDate: t.finishDate
    })
  });
  specialist.educations = Boolean(education.length) ? {education} : null;

  specialist.hour_price = Number.parseFloat((form.hour_price || '').replace(/\D+/g, ""));

  specialist.work_formats = {
    remotely: form.work_formats.remote,
    office: form.work_formats.office,
  };
  specialist.business_trips = form.business_trips;
  specialist.international_projects = form.international_projects;
  specialist.relocation_place = {
    inCountry: form.relocation_place.inCountry,
    outCountry: form.relocation_place.outCountry,
  }

  const _JSON = {
    specialists: {
      specialist
    }
  }
  const json = JSON.stringify(_JSON);
  const xml = json2xml(json, { compact: true, spaces: 1 });

  return xml
}
