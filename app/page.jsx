import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta name="google-site-verification" content="xi3LCXwzZC7EdFskSZTQQP_YI5UMeAm2URVqQkPGc_4" />
        <title>تأجير سيارات في دبي - احجز الآن واستمتع بالراحة والمرونة | Company</title>
        <meta name="description" content="استأجر سيارة في دبي من أفضل شركات التأجير واستمتع براحة ومرونة لا مثيل لها. اكتشف معالم دبي الشهيرة واستمتع بتجربة قيادة فاخرة وآمنة. احجز الآن واحصل على أفضل العروض!" />
        <meta property="og:title" content="تأجير سيارات في دبي - احجز الآن واستمتع بالراحة والمرونة | Company" />
        <meta property="og:description" content="استأجر سيارة في دبي من أفضل شركات التأجير واستمتع براحة ومرونة لا مثيل لها. اكتشف معالم دبي الشهيرة واستمتع بتجربة قيادة فاخرة وآمنة. احجز الآن واحصل على أفضل العروض!" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="تأجير سيارات في دبي - احجز الآن واستمتع بالراحة والمرونة | Company" />
        <meta property="twitter:description" content="استأجر سيارة في دبي من أفضل شركات التأجير واستمتع براحة ومرونة لا مثيل لها. اكتشف معالم دبي الشهيرة واستمتع بتجربة قيادة فاخرة وآمنة. احجز الآن واحصل على أفضل العروض!" />
        <link rel="canonical" href="http://localhost:3000/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="تأجير سيارات في دبي" />

        <section className="hero-section text-center py-16 px-4">
          <h1 className="text-4xl font-bold">تأجير السيارات في دبي: الدليل النهائي</h1>
          <p className="mt-6 max-w-2xl mx-auto">
            دبي، جوهرة متلألئة في الإمارات العربية المتحدة، مدينة مرادفة للفخامة والابتكار والعظمة. مع ناطحات السحاب والمراكز التجارية الراقية، استئجار سيارة يمنحك حرية اكتشافها حسب جدولك.
          </p>
        </section>

        <section className="why-rent py-16 px-4">
          <h2 className="text-3xl font-bold text-center">لماذا تستأجر سيارة في دبي؟</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="card p-6 border rounded-lg">
              <h3 className="text-xl font-semibold">الراحة والمرونة</h3>
              <p className="mt-2">استئجار سيارة يتيح لك التنقل بسهولة وزيارة الأماكن السياحية مثل برج خليفة ودبي مول حسب راحتك دون الاعتماد على جداول النقل العام.</p>
            </div>
            <div className="card p-6 border rounded-lg">
              <h3 className="text-xl font-semibold">توفير التكاليف</h3>
              <p className="mt-2">عند السفر مع العائلة أو مجموعة، يمكن أن يكون استئجار السيارة أقل تكلفة من التنقل عبر سيارات الأجرة، خاصة مع العروض التنافسية المقدمة.</p>
            </div>
            <div className="card p-6 border rounded-lg">
              <h3 className="text-xl font-semibold">الخصوصية والراحة</h3>
              <p className="mt-2">استمتع بقيادة خاصة بدون مشاركة، مع تحكم كامل في وقتك ومسارك، ما يوفر تجربة سفر أكثر خصوصية وراحة.</p>
            </div>
          </div>
        </section>

        <section className="rental-process py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-6">عملية تأجير السيارات في دبي</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-semibold">المتطلبات اللازمة</h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>العمر الأدنى 21 عامًا، وقد يختلف حسب نوع السيارة.</li>
                <li>رخصة قيادة سارية (دولية أو إماراتية حسب الجنسية).</li>
                <li>بطاقة ائتمان باسم السائق لتأمين الحجز.</li>
                <li>جواز السفر والتأشيرة للسياح.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">اختيار السيارة المناسبة</h3>
              <p className="mt-2">حدد نوع السيارة حسب الغرض من الاستئجار (اقتصادية، عائلية، فاخرة) والمزايا المطلوبة (GPS، مقاعد أطفال، تأمين إضافي).</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">خطوات الحجز</h3>
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>احجز مسبقًا عبر الموقع أو الواتساب.</li>
                <li>قدم الوثائق المطلوبة عند الاستلام.</li>
                <li>افحص السيارة قبل القيادة والتقط صورًا لأي خدوش.</li>
                <li>ادفع الرسوم والمبلغ المودع على البطاقة.</li>
                <li>أعد السيارة بحالتها الأصلية وفي الوقت المحدد.</li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
