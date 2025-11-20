# Website Marloes Verhagen

Een moderne, professionele website voor Marloes Verhagen - Interim HR-professional en teamcoach.

## 🎨 Design

De website is gebouwd met een minimalistisch design dat perfect aansluit bij de professionele maar toegankelijke uitstraling:

- **Kleurpalet**: 
  - Beige achtergrond (`#F3F1EF`) - warm en professioneel
  - Donkere teal accenten (`#042B2E`) - zakelijk maar modern
  - Wit voor contrast en content secties

- **Stijl**: Clean, minimalistisch met veel witruimte en hoge contrast voor optimale leesbaarheid

## 🚀 Technologie

- **Next.js 15** - React framework met App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobiel-vriendelijk

## 📦 Installatie

```bash
cd website
npm install
```

## 🏃 Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser om de website te bekijken.

## 📁 Project Structuur

```
website/
├── app/
│   ├── components/          # React componenten
│   │   ├── Hero.tsx         # Hero sectie
│   │   ├── Navigation.tsx   # Navigatie menu
│   │   ├── Services.tsx     # Diensten sectie
│   │   ├── TargetGroup.tsx  # Doelgroep sectie
│   │   ├── USP.tsx          # Unique Selling Points
│   │   ├── About.tsx        # Over mij sectie
│   │   └── Footer.tsx       # Footer met contact
│   ├── data/
│   │   └── content.ts       # Alle content data
│   ├── globals.css          # Global styles & kleuren
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── public/                  # Static assets
└── package.json
```

## ✏️ Content Aanpassen

Alle content staat in `app/data/content.ts`. Pas hier de teksten aan om de website te updaten.

## 🎯 Features

- ✅ Responsive design (mobiel, tablet, desktop)
- ✅ Smooth scrolling navigatie
- ✅ Modern, minimalistisch design
- ✅ TypeScript voor type safety
- ✅ SEO-vriendelijke structuur
- ✅ Snelle laadtijden met Next.js

## 📝 Secties

1. **Hero** - Introductie met hoofdboodschap "Ik maak verandering werkbaar!"
2. **Diensten** - Drie hoofddiensten: HR-advies, Team coaching, Verander begeleiding
3. **Doelgroep** - Beschrijving van de doelgroep en profielen
4. **USP** - Unique Selling Points met kernwaarden
5. **Over mij** - Wat Marloes uitstraalt
6. **Contact** - Contactgegevens en beschikbaarheid in footer

## 🚀 Deployment

De website kan worden gedeployed op:
- **Vercel** (aanbevolen voor Next.js)
- **Netlify**
- **Elke andere hosting service die Node.js ondersteunt**

Voor Vercel:
```bash
npm run build
vercel deploy
```

---

**Gemaakt met ❤️ voor Marloes Verhagen**
