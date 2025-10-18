
<!-- <!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>VirTech Academy — Data Analytics (Telugu)</title>
  <meta name="description" content="VirTech Academy - Telugu-first Data Analytics course. 8-week live + recordings. Affordable, practical projects." />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root{--bg:#f6f9fc;--card:#ffffff;--muted:#6b7280;--accent:#4f46e5;--accent-2:#06b6d4;--success:#10b981;--danger:#ef4444;font-family:Poppins,system-ui,Arial}
    *{box-sizing:border-box}
    body{margin:0;background:var(--bg);color:#0f1724;line-height:1.45}
    .container{max-width:1100px;margin:0 auto;padding:20px}
    header{display:flex;align-items:center;justify-content:space-between;padding:18px 0}
    .brand{display:flex;gap:12px;align-items:center}
    .logo{width:52px;height:52px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#7c3aed);color:#fff;display:grid;place-items:center;font-weight:800}
    nav{display:flex;gap:14px;align-items:center}
    nav a{color:var(--muted);text-decoration:none;font-weight:600}
    .hero{display:grid;grid-template-columns:1fr 380px;gap:28px;align-items:center;margin-bottom:20px}
    .card{background:var(--card);border-radius:12px;padding:18px;box-shadow:0 6px 18px rgba(15,23,36,0.06)}
    h1{font-size:28px;margin:0}
    p.sub{color:var(--muted);margin-top:8px}
    .cta{display:flex;gap:10px;margin-top:16px}
    .btn{padding:10px 14px;border-radius:8px;border:0;cursor:pointer;font-weight:700}
    .btn-primary{background:var(--accent);color:#fff}
    .btn-ghost{background:#eef2ff;color:var(--accent);border:1px solid rgba(79,70,229,0.08)}
    .small{font-size:13px;color:var(--muted)}
    .features{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:14px}
    .f{padding:14px;border-radius:10px;background:#fbfdff}
    .syllabus{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:12px}
    .pricing{display:flex;gap:12px;flex-wrap:wrap}
    .plan{flex:1;min-width:220px}
    .faq{margin-top:12px}
    .faq-item{background:#fff;padding:12px;border-radius:10px;margin-bottom:8px}
    footer{margin-top:20px;padding:18px 0;color:var(--muted);font-size:14px}
    .badge{background:#edf2ff;color:var(--accent);padding:6px 10px;border-radius:999px;font-weight:700}
    form .row{display:flex;gap:8px}
    input,textarea,select{width:100%;padding:10px;border-radius:8px;border:1px solid #e6eefc;font-size:14px}
    label{font-weight:600;font-size:13px}
    .muted{color:var(--muted)}
    .center{text-align:center}
    .mobile-hidden{display:block}
    @media(max-width:900px){
      .hero{grid-template-columns:1fr}
      .features{grid-template-columns:repeat(2,1fr)}
      .syllabus{grid-template-columns:1fr}
      nav{display:none}
      .mobile-hidden{display:none}
    }
    /* small helpers */
    .pill{display:inline-block;padding:6px 10px;border-radius:999px;background:#f3f4f6;color:#111;font-weight:700}
    .success{color:var(--success)}
    .danger{color:var(--danger)}
    .footer-links{display:flex;gap:12px}
    .flex{display:flex;gap:12px;align-items:center}
    /* modal */
    .modal-backdrop{position:fixed;inset:0;background:rgba(2,6,23,0.6);display:none;align-items:center;justify-content:center;padding:20px}
    .modal{background:#fff;border-radius:12px;max-width:720px;width:100%;padding:18px}
    .close{background:#f3f4f6;border:0;padding:8px;border-radius:8px;cursor:pointer}
    /* tiny toast */
    .toast{position:fixed;right:20px;bottom:20px;background:#111;color:#fff;padding:12px 16px;border-radius:8px;display:none}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="logo">VT</div>
        <div>
          <div style="font-weight:800">VirTech Academy</div>
          <div class="small">Telugu-first Data Analytics</div>
        </div>
      </div>
      <nav>
        <a href="#course">Course</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="mobile-hidden">
        <button class="btn btn-primary" onclick="scrollToSection('pricing')">Enroll</button>
      </div>
    </header>

    <section class="hero">
      <div>
        <h1>Learn Data Analytics — In Telugu. Start from Scratch.</h1>
        <p class="sub">8-week live + recorded course for final-year & recent grads. Practical projects, bilingual instruction, and community support.</p>
        <div class="cta">
          <button class="btn btn-primary" onclick="openEnroll()">Enroll Now — ₹3,999</button>
          <button class="btn btn-ghost" onclick="openModal('demo')">Watch Free Demo (2-hr)</button>
        </div>
        <div style="margin-top:12px" class="small">Limited seats • Weekend live classes • Telegram support</div>
        <div style="margin-top:12px;color:var(--accent);font-weight:700">మీ భాషలో డేటా అనలిటిక్స్ — ఇక్కడే నేర్చుకోండి</div>

        <div class="features" style="margin-top:18px">
          <div class="f"><strong>Telugu-first instruction</strong><div class="muted">Learn complex topics in Telugu + English tech terms.</div></div>
          <div class="f"><strong>Project-based</strong><div class="muted">Build 3 portfolio projects to show employers.</div></div>
          <div class="f"><strong>Affordable</strong><div class="muted">Designed for Tier-2/3 Telugu students.</div></div>
        </div>
      </div>

      <aside class="card">
        <strong>Course Snapshot</strong>
        <ul style="padding-left:18px;margin-top:10px;color:var(--muted)">
          <li>Duration: 8 weeks (Weekends)</li>
          <li>Format: Live + Recordings</li>
          <li>Batch size: 30 students</li>
          <li>Tools: Excel, SQL, Power BI, Python</li>
        </ul>
        <div style="margin-top:12px">
          <button class="btn btn-primary" style="width:100%" onclick="openEnroll()">Reserve Seat</button>
        </div>
        <div style="margin-top:12px;font-size:13px;color:var(--muted)">Want a campus batch? <a href="#contact">Get a quote</a></div>
      </aside>
    </section>

    <section id="course" class="card">
      <h3>Course Syllabus — 8 Weeks</h3>
      <div class="syllabus" style="margin-top:12px">
        <div class="card"><strong>Week 1</strong><div class="muted">Intro & Excel Basics</div></div>
        <div class="card"><strong>Week 5</strong><div class="muted">Power BI intro & cleaning</div></div>
        <div class="card"><strong>Week 2</strong><div class="muted">Advanced Excel & Dashboards</div></div>
        <div class="card"><strong>Week 6</strong><div class="muted">Power BI DAX & reports</div></div>
        <div class="card"><strong>Week 3</strong><div class="muted">SQL Basics (SELECT, JOIN)</div></div>
        <div class="card"><strong>Week 7</strong><div class="muted">Python for Analytics (Pandas)</div></div>
        <div class="card"><strong>Week 4</strong><div class="muted">SQL Advanced (CTE, Window)</div></div>
        <div class="card"><strong>Week 8</strong><div class="muted">Capstone: End-to-end dashboard</div></div>
      </div>

      <div style="margin-top:14px;display:flex;gap:12px;flex-wrap:wrap">
        <div class="card" style="flex:1;min-width:260px"><strong>Projects</strong><div class="muted">Sales dashboard (Excel), Customer analytics (SQL), Interactive Power BI capstone project.</div></div>
        <div class="card" style="flex:1;min-width:260px"><strong>Bonuses</strong><div class="muted">Resume & LinkedIn guides in Telugu, Interview question booklet.</div></div>
      </div>
    </section>

    <section id="pricing" style="margin-top:18px">
      <h3>Pricing & Plans</h3>
      <div class="pricing" style="margin-top:12px">
        <div class="plan card">
          <h4>Intro Offer</h4>
          <div style="font-size:20px;font-weight:800">₹3,999</div>
          <p class="muted">8-week live course + recordings + Telegram support</p>
          <div style="margin-top:8px">
            <button class="btn btn-primary" onclick="openEnroll('intro')">Enroll Intro</button>
          </div>
        </div>

        <div class="plan card">
          <h4>Standard</h4>
          <div style="font-size:20px;font-weight:800">₹6,999</div>
          <p class="muted">Everything in Intro + 2x 1:1 mentoring sessions</p>
          <div style="margin-top:8px">
            <button class="btn btn-primary" onclick="openEnroll('standard')">Enroll Standard</button>
          </div>
        </div>

        <div class="plan card">
          <h4>College / Group</h4>
          <div style="font-size:20px;font-weight:800">₹2,999 / student</div>
          <p class="muted">For groups of 10+. Custom batches available.</p>
          <div style="margin-top:8px">
            <button class="btn btn-ghost" onclick="openContact('group')">Get Quote</button>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="card" style="margin-top:18px">
      <h3>Frequently Asked Questions</h3>
      <div class="faq" style="margin-top:12px">
        <div class="faq-item"><strong>Do you provide job placement?</strong><div class="muted">No — this course focuses on practical skills and portfolio projects to help you get interviews.</div></div>
        <div class="faq-item"><strong>What is the language of instruction?</strong><div class="muted">Primary Telugu with English technical terms. Materials provided in Telugu when possible.</div></div>
        <div class="faq-item"><strong>What tools do I need?</strong><div class="muted">Laptop, internet, Excel (or Google Sheets), Power BI Desktop (free), and a browser for SQL practice.</div></div>
        <div class="faq-item"><strong>Refund policy?</strong><div class="muted">Full refund within 48 hours of course start if less than one live class attended.</div></div>
      </div>
    </section>

    <section id="contact" class="card" style="margin-top:18px">
      <h3>Contact & Enroll — Quick Form</h3>
      <form id="enrollForm" class="card" onsubmit="submitEnroll(event)">
        <input type="hidden" id="planInput" name="plan" />
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <div style="flex:1;min-width:200px">
            <label for="name">Full name</label>
            <input id="name" name="name" required />
          </div>
          <div style="flex:1;min-width:200px">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
        </div>
        <div style="display:flex;gap:12px;margin-top:8px;flex-wrap:wrap">
          <div style="flex:1;min-width:200px">
            <label for="phone">Phone / WhatsApp</label>
            <input id="phone" name="phone" required />
          </div>
          <div style="flex:1;min-width:200px">
            <label for="city">City</label>
            <input id="city" name="city" />
          </div>
        </div>

        <div style="margin-top:12px">
          <label for="message">Message (optional)</label>
          <textarea id="message" name="message" rows="3"></textarea>
        </div>

        <div style="margin-top:12px;display:flex;gap:12px;align-items:center">
          <input id="agree" type="checkbox" required /> <label for="agree">I agree to the <a href="#" onclick="openModal('tnc');return false;">Terms & Conditions</a></label>
        </div>

        <div style="margin-top:12px;display:flex;gap:12px">
          <button type="submit" class="btn btn-primary">Proceed to Payment</button>
          <button type="button" class="btn btn-ghost" onclick="saveDraft()">Save Draft</button>
        </div>
      </form>

      <div style="margin-top:12px" class="muted">Prefer WhatsApp? <a href="https://wa.me/919999999999?text=Hello%20VirTech%20Academy%20-%20I%20want%20to%20enroll" target="_blank">Chat on WhatsApp</a></div>
    </section>

    <footer>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px">
        <div>© <strong>VirTech Academy</strong> — Telugu-first Data Analytics</div>
        <div class="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#tnc" onclick="openModal('tnc');return false;">T&C</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  </div>


  <div id="modalBackdrop" class="modal-backdrop" onclick="closeModal(event)">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <h3 id="modalTitle">Modal</h3>
        <button class="close" onclick="closeModal()">✕</button>
      </div>
      <div id="modalContent" style="margin-top:12px;color:var(--muted)"></div>
      <div style="margin-top:12px;display:flex;justify-content:flex-end">
        <button class="btn btn-ghost" onclick="closeModal()">Close</button>
      </div>
    </div>
  </div>

  <div id="toast" class="toast">Saved</div>

  <script>
    // Small SPA-like helpers
    function scrollToSection(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})}

    function openModal(type){
      const backdrop = document.getElementById('modalBackdrop')
      const title = document.getElementById('modalTitle')
      const body = document.getElementById('modalContent')
      backdrop.style.display='flex'
      if(type==='tnc'){
        title.innerText='Terms & Conditions'
        body.innerHTML=`<h4>Terms & Conditions - VirTech Academy</h4>
        <p>By enrolling you agree to our standard T&C. This course is a skills-only offering and does not guarantee job placement.</p>
        <ol>
          <li>Fees are non-refundable after 48 hours from the course start if more than one live class attended.</li>
          <li>We reserve the right to change schedules with prior notice.</li>
          <li>Recorded content is property of VirTech Academy; students get access for a specified period.</li>
        </ol>
        <p class="muted">Customize these terms as per your policy.</p>`
      } else if(type==='demo'){
        title.innerText='Free Demo Workshop — 2 hours'
        body.innerHTML=`<p class="muted">Join our free 2-hour demo: hands-on Excel + Dashboard walkthrough in Telugu. We'll show sample lessons and answer questions.</p>
        <p><strong>Next batch:</strong> Coming soon — register to reserve your spot.</p>`
      } else if(type==='payment-success'){
        title.innerText='Payment Successful'
        body.innerHTML=`<p>Thank you! Your enrollment is confirmed. We will contact you on the provided WhatsApp/Email within 24 hours.</p>`
      }
    }
    function closeModal(e){
      if(e && e.target.id!=='modalBackdrop') return
      document.getElementById('modalBackdrop').style.display='none'
    }

    // Enrollment form logic (frontend simulation)
    function openEnroll(plan){
      document.getElementById('planInput').value = plan || 'intro'
      scrollToSection('contact')
      // Optionally prefill price or show plan summary
    }

    function openContact(type){
      scrollToSection('contact')
      if(type==='group'){
        document.getElementById('message').value = 'Enquiry: Group/college batch for '+(new Date().toLocaleDateString())
      }
    }

    function saveDraft(){
      const data = getFormData()
      localStorage.setItem('virtech_enroll_draft', JSON.stringify(data))
      showToast('Draft saved locally')
    }

    function loadDraft(){
      const raw = localStorage.getItem('virtech_enroll_draft')
      if(!raw) return
      try{const d=JSON.parse(raw)
        document.getElementById('name').value=d.name||''
        document.getElementById('email').value=d.email||''
        document.getElementById('phone').value=d.phone||''
        document.getElementById('city').value=d.city||''
        document.getElementById('message').value=d.message||''
        document.getElementById('planInput').value=d.plan||''
        showToast('Loaded saved draft')
      }catch(err){console.warn(err)}
    }

    function getFormData(){
      return {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
        city:document.getElementById('city').value,
        message:document.getElementById('message').value,
        plan:document.getElementById('planInput').value
      }
    }

    function submitEnroll(e){
      e.preventDefault()
      const agree = document.getElementById('agree').checked
      if(!agree){alert('Please agree to Terms & Conditions');return}
      const data = getFormData()
      // Basic validation
      if(!data.name||!data.email||!data.phone){alert('Please fill required fields');return}

      // Simulate payment flow — in production, call your payment gateway here
      simulatePayment(data)
    }

    function simulatePayment(data){
      // Save enrollment locally (simulate server)
      const enrollments = JSON.parse(localStorage.getItem('virtech_enrollments')||'[]')
      data.id = 'VT-'+Date.now()
      data.timestamp = new Date().toISOString()
      enrollments.push(data)
      localStorage.setItem('virtech_enrollments', JSON.stringify(enrollments))

      // show success modal
      openModal('payment-success')

      // optionally clear form
      document.getElementById('enrollForm').reset()
      // show toast
      showToast('Enrollment complete — confirmation saved locally')

      // In production, send data to your backend + integrate payments (Razorpay, Stripe)
    }

    function showToast(msg, timeout=3000){
      const t = document.getElementById('toast')
      t.innerText = msg
      t.style.display = 'block'
      setTimeout(()=>{t.style.display='none'}, timeout)
    }

    // accessibility keyboard close
    document.addEventListener('keydown', function(e){if(e.key==='Escape') closeModal()})

    // prefill from draft on load
    window.addEventListener('load', loadDraft)
  </script>
</body>
</html> -->

<!-- <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>VirTech Academy — Data Analytics Course in Telugu</title>
    <meta
      name="description"
      content="Learn Data Analytics in Telugu — Excel, SQL, Power BI & Python basics. 8-week live course, practical projects, affordable fee."
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --accent: #0b63d6;
        --muted: #6b7280;
        --bg: #f7f9fc;
        font-family: Inter, system-ui, Segoe UI, Roboto, "Helvetica Neue", Arial;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        background: var(--bg);
        color: #0f1724;
        font-family: Inter, system-ui, Helvetica, Arial;
        -webkit-font-smoothing: antialiased;
      }
      .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 24px;
      }
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 0;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .logo {
        width: 46px;
        height: 46px;
        background: var(--accent);
        color: #fff;
        border-radius: 8px;
        display: grid;
        place-items: center;
        font-weight: 700;
      }
      nav a {
        margin-left: 18px;
        color: var(--muted);
        text-decoration: none;
        font-weight: 600;
      }
      .hero {
        background: #fff;
        padding: 36px;
        border-radius: 12px;
        display: grid;
        grid-template-columns: 1fr 360px;
        gap: 28px;
        align-items: center;
        margin-bottom: 18px;
      }
      .hero h1 {
        margin: 0;
        font-size: 28px;
      }
      .hero p {
        color: var(--muted);
        margin-top: 8px;
      }
      .cta {
        display: flex;
        gap: 12px;
        margin-top: 18px;
      }
      .btn {
        padding: 12px 16px;
        border-radius: 8px;
        border: 0;
        cursor: pointer;
        font-weight: 700;
      }
      .btn-primary {
        background: var(--accent);
        color: #fff;
      }
      .btn-ghost {
        background: #eef2ff;
        border: 1px solid #e6eefc;
        color: var(--accent);
      }
      .card {
        background: #fff;
        padding: 18px;
        border-radius: 10px;
      }
      .features {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        margin: 18px 0;
      }
      .features .f {
        padding: 12px;
        border-radius: 8px;
        background: #fbfdff;
      }
      section {
        margin-bottom: 18px;
      }
      .syllabus {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
      .pricing {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }
      .plan {
        background: #fff;
        padding: 18px;
        border-radius: 10px;
        min-width: 220px;
        flex: 1;
      }
      footer {
        color: var(--muted);
        padding: 18px 0;
      }
      .faq {
        display: grid;
        gap: 8px;
      }
      @media (max-width: 900px) {
        .hero {
          grid-template-columns: 1fr;
        }
        .features {
          grid-template-columns: repeat(2, 1fr);
        }
        .syllabus {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <div class="brand">
          <div class="logo">VT</div>
          <div>
            <div style="font-weight: 700">VirTech Academy</div>
            <div style="font-size: 13px; color: var(--muted)">
              Telugu-first Data Analytics
            </div>
          </div>
        </div>
        <nav>
          <a href="#course">Course</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section class="hero">
        <div>
          <h1>Learn Data Analytics — In Telugu. Start from Scratch.</h1>
          <p>
            8-week live course for final-year & recent grads. Live classes +
            recordings, practical projects, and an active Telugu community.
          </p>

          <div class="cta">
            <button class="btn btn-primary" onclick="location.href='#pricing'">
              Enroll Now — ₹3,999
            </button>
            <button class="btn btn-ghost" onclick="location.href='#course'">
              Watch Free Demo
            </button>
          </div>

          <div style="margin-top: 16px; color: var(--muted)">
            Limited seats • Weekend live classes • Telegram support
          </div>
          <div style="margin-top: 12px; font-weight: 600; color: var(--accent)">
            మీ భాషలో డేటా అనలిటిక్స్ — ఇక్కడే నేర్చుకోండి
          </div>
        </div>

        <aside class="card">
          <strong>Course Snapshot</strong>
          <ul style="padding-left: 18px; margin-top: 10px; color: var(--muted)">
            <li>Duration: 8 weeks (Weekends)</li>
            <li>Format: Live + Recordings</li>
            <li>Batch size: 30 students</li>
            <li>Tools: Excel, SQL, Power BI, Python</li>
          </ul>
          <div style="margin-top: 12px">
            <button
              class="btn btn-primary"
              style="width: 100%"
              onclick="location.href='#pricing'"
            >
              Reserve Seat
            </button>
          </div>
        </aside>
      </section>

      <section id="why" class="card">
        <h3>Why VirTech Academy?</h3>
        <div class="features">
          <div class="f">
            <strong>Telugu-first instruction</strong>
            <div style="color: var(--muted)">
              Complex topics explained in Telugu + English technical terms.
            </div>
          </div>
          <div class="f">
            <strong>Project-based learning</strong>
            <div style="color: var(--muted)">
              Capstone dashboard + two mini projects to build your portfolio.
            </div>
          </div>
          <div class="f">
            <strong>Affordable fees</strong>
            <div style="color: var(--muted)">
              Designed for students from Tier-2/3 Telugu regions.
            </div>
          </div>
        </div>
      </section>

      <section id="course">
        <h3>Course Syllabus — 8 Weeks (Short)</h3>
        <div class="syllabus card">
          <div>
            <strong>Week 1</strong>
            <div style="color: var(--muted)">Intro & Excel Basics</div>
          </div>
          <div>
            <strong>Week 5</strong>
            <div style="color: var(--muted)">Power BI intro & cleaning</div>
          </div>

          <div>
            <strong>Week 2</strong>
            <div style="color: var(--muted)">Advanced Excel & Dashboards</div>
          </div>
          <div>
            <strong>Week 6</strong>
            <div style="color: var(--muted)">Power BI DAX & reports</div>
          </div>

          <div>
            <strong>Week 3</strong>
            <div style="color: var(--muted)">SQL Basics (SELECT, JOIN)</div>
          </div>
          <div>
            <strong>Week 7</strong>
            <div style="color: var(--muted)">Python for Analytics (Pandas)</div>
          </div>

          <div>
            <strong>Week 4</strong>
            <div style="color: var(--muted)">SQL Advanced (CTE, Window)</div>
          </div>
          <div>
            <strong>Week 8</strong>
            <div style="color: var(--muted)">
              Capstone: End-to-end dashboard
            </div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <h3>Pricing & Plans</h3>
        <div class="pricing">
          <div class="plan card">
            <h4>Intro Offer</h4>
            <div style="font-size: 20px; font-weight: 700">₹3,999</div>
            <p style="color: var(--muted)">
              8-week live course + recordings + Telegram support
            </p>
            <button
              class="btn btn-primary"
              onclick="alert('Enroll flow placeholder')"
            >
              Enroll Now
            </button>
          </div>

          <div class="plan card">
            <h4>Standard</h4>
            <div style="font-size: 20px; font-weight: 700">₹6,999</div>
            <p style="color: var(--muted)">
              Includes 2x 1:1 mentoring sessions
            </p>
            <button
              class="btn btn-primary"
              onclick="alert('Enroll flow placeholder')"
            >
              Enroll Now
            </button>
          </div>

          <div class="plan card">
            <h4>College / Group</h4>
            <div style="font-size: 20px; font-weight: 700">
              ₹2,999 / student
            </div>
            <p style="color: var(--muted)">
              For groups of 10+. Custom batches available.
            </p>
            <button class="btn btn-primary" onclick="location.href='#contact'">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      <section id="faq" class="card">
        <h3>Frequently Asked Questions</h3>
        <div class="faq">
          <div>
            <strong>Do you provide job placement?</strong>
            <div style="color: var(--muted)">
              No — this course focuses on practical skills and portfolio
              projects.
            </div>
          </div>
          <div>
            <strong>Language?</strong>
            <div style="color: var(--muted)">
              Primary Telugu with English technical terms. Materials in Telugu
              where possible.
            </div>
          </div>
          <div>
            <strong>Refund policy?</strong>
            <div style="color: var(--muted)">
              Full refund within 48 hours of start if less than one live class
              attended.
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="card">
        <h3>Contact & Enroll</h3>
        <p style="color: var(--muted)">
          Email:
          <a href="mailto:hello@virtechacademy.in">hello@virtechacademy.in</a> —
          WhatsApp: +91-XXXXXXXXXX
        </p>
        <p style="color: var(--muted)">
          Want a campus batch?
          <a href="mailto:partnerships@virtechacademy.in"
            >partnerships@virtechacademy.in</a
          >
        </p>
      </section>

      <footer>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
          "
        >
          <div>
            © <strong>VirTech Academy</strong> — Telugu-first Data Analytics
          </div>
          <div style="color: var(--muted)">Privacy • Refund • Terms</div>
        </div>
      </footer>
    </div>
  </body>
</html> -->
