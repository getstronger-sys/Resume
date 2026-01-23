// 翻译数据
const translations = {
    zh: {
        nav: {
            home: "首页",
            education: "教育",
            publications: "论文",
            research: "科研",
            projects: "项目",
            competitions: "竞赛",
            skills: "技能",
            honors: "荣誉",
            others: "其他",
            contact: "联系"
        },
        home: {
            name: "李炜仪",
            research: "研究方向：多模态大语言模型与多智能体推理 / 人工智能应用",
            personalPage: "个人主页"
        },
        footer: {
            lastUpdate: "最后更新"
        },
        modal: {
            selectLanguage: "请选择语言 / Please Select Language"
        },
        education: {
            title: "教育背景",
            university: "北京邮电大学 | 智能科学与技术",
            period: "(2023.09 -- 2027.06)",
            gpa: "GPA: 3.87/4.0 | 加权平均分: 93.21/100",
            rank: "专业排名: 3/96（3.1%）",
            courses: "优势课程"
        },
        publications: {
            title: "论文",
            zhiwujie: {
                title: "智体无界 — 基于类脑架构的运动智能体",
                badge1: "国创赛",
                badge2: "铜奖"
            }
        },
        research: {
            title: "科研经历",
            lab1: {
                name: "北京邮电大学网络空间安全学院 – 移动互联网安全技术国家工程实验室",
                period: "(2024.06 -- 至今)",
                position: "本科实习生 | 导师：南国顺教授",
                project1: {
                    status: "（Manuscript prepared）",
                    desc1: "此论文首次提出MAS-SEE（Multi-Agent System for Security & Energy Efficiency），通过轻量级边缘检测和意图驱动的策略生成，实现了6G智能工厂中安全性和能效的动态优化与平衡。",
                    desc2: "本人设计意图智能体，实现类脑语义识别与管理员指令解析；构建免疫与协调机制，实现冲突检测及最优分配策略；负责项目论文撰写与关键架构绘图。"
                },
                project2: {
                    title: "[2] 基于电压信号与生成式智能融合的极低照度成像增强方法（专利）",
                    desc1: "本专利提出端到端微伏级电压信号成像方法，通过时域、空域与频谱多分支特征融合及自监督暗帧校正，实现＜0.01 lux条件下高信噪比、高保真彩色图像实时生成。",
                    desc2: "本人设计从传感器采集到最终图像输出的整个处理流程，绘制相应的时序图，并负责专利文件的撰写。"
                }
            },
            lab2: {
                name: "江淮前沿技术协同创新中心AI安全专业部实验室",
                period: "(2025.06 -- 至今)",
                position: "本科实习生 | 导师：房江博士",
                project1: {
                    desc1: "本研究提出 CGSD 框架，结合监督对比学习与分类微调，实现对不同 LLM 生成代码的识别。",
                    desc2: "本人负责数据集的构建与标注、风格特征的提取与分析、框架与实验设计，并独立完成论文撰写工作。"
                },
                project2: {
                    desc1: "本研究提出了一种自监督+对抗训练的网络入侵检测框架，提升了系统在对抗样本下的鲁棒性。",
                    desc2: "本人负责自监督学习模块的设计、对抗训练策略的构建、实验分析，并参与论文撰写工作。"
                }
            },
            lab3: {
                name: "中科院自动化所-复杂系统认知与决策重点实验室",
                period: "(2026.01 -- 至今)",
                position: "本科实习生 | 导师：黄凯奇教授"
            }
        },
        projects: {
            title: "项目经历",
            project1: {
                title: "[1] 不良言论识别模型",
                content: "基于 Llama-13B 使用 LoRA 进行轻量微调，设计五维恶意值向量输出并通过雷达图可视化，使用 INT8 量化生成轻量化模型；负责数据集构建、标签体系设计与模型训练。"
            },
            project2: {
                title: "[2] \"智体无界 — 基于类脑架构的运动智能体\"（荣获中国国际大学生创新大赛铜奖）",
                content: "基于国家乒乓球运动员数据集，融合图神经网络、时空双流模型实现毫米级动作量化与智能技战术分析；负责动作识别与分割、动作分析逻辑设计与参数优化。"
            },
            project3: {
                title: "[3] 配备2D激光雷达的迷宫导航与建图自主移动机器人（团队综合成绩位列年级前十）",
                content: "Design&Build 课程项目，代码：<a href=\"https://github.com/getstronger-sys/Radar-car\" target=\"_blank\" class=\"code-link\">配备2D激光雷达的迷宫导航与建图自主移动机器人</a>。作为项目负责人，独立完成 SLAM 实时建图、DWA 局部避障及 A* 路径规划，合作完成传感器与控制硬件对接。"
            },
            project4: {
                title: "[4] 北京地铁查询系统（独立开发）",
                content: "数据结构与算法课程设计，代码：<a href=\"https://github.com/getstronger-sys/Beijing-Metro-Information-Query-System\" target=\"_blank\" class=\"code-link\">北京地铁查询系统</a>。实现基于邻接表+最小堆优化的双策略路径规划，线路级剪枝提升查询效率30%，整合真实时刻表数据实现动态线路管理与实时发车模拟。"
            },
            project5: {
                title: "[5] 工程技术学会（IET）颁发的2025年模型国际会议（MIC）最佳海报奖与优秀论文",
                content: "论文\"Technology-Driven Sports Digital Twin: Human-Machine Collaborative Olympic Strategic Decision System\"提出面向奥运会的战略决策框架，结合 K-means 聚类、时间序列预测与马尔可夫模型实现奖牌分布预测与跨国训练优化。"
            }
        },
        competitions: {
            title: "竞赛",
            comp1: "2024 全国大学生数学竞赛一等奖",
            comp2: "2025 全国大学生数学建模竞赛国家二等奖",
            comp3: "2024 首届高校ICT产教融合创新大赛二等奖",
            comp4: "2024 全国大学生英语竞赛三等奖"
        },
        skills: {
            title: "专业能力",
            programming: {
                title: "编程语言",
                content: "C/C++、Python、Java<br>SQL、HTML/CSS/JavaScript"
            },
            computer: {
                title: "计算机基础",
                content: "数据结构与算法<br>数据库技术、Git版本管理"
            },
            ai: {
                title: "AI/机器学习",
                content: "GenAI：VAE、GAN、Diffusion<br>CNN/RNN/Transformer<br>PyTorch/TensorFlow框架"
            },
            other: {
                title: "英语能力&其他技能",
                content: "LaTeX、达芬奇剪辑与调色<br><a href=\"images/英语成绩证明/2023213677_四级成绩证明.pdf\" target=\"_blank\" class=\"cert-link\">英语四级</a>、<a href=\"images/英语成绩证明/2023213677_六级成绩证明.pdf\" target=\"_blank\" class=\"cert-link\">英语六级</a>"
            }
        },
        honors: {
            title: "荣誉",
            honor1: "国家奖学金（2023-2024，2024-2025）",
            honor2: "校级三好学生（2023-2024）优秀学生干部（2024-2025）",
            honor3: "北京市三好学生（2025-2026）",
            honor4: "北京邮电大学优秀团员（2023-2024，2024-2025）",
            honor5: "成功入选2024 Winter trip，赴英国交流学习",
            certificates: "获奖证书",
            cert1: "国家奖学金证书",
            cert2: "全国大学生数学竞赛一等奖",
            cert3: "全国大学生数学建模竞赛国家二等奖",
            cert4: "全国大学生英语竞赛三等奖",
            cert5: "IET MIC最佳海报奖与优秀论文",
            cert6: "市级数学竞赛",
            cert7: "省级数学建模竞赛",
            cert8: "优秀班集体"
        },
        others: {
            title: "其他",
            studentWork: {
                title: "学生工作与思想政治：",
                content: "中国共产党预备党员<br>团支部书记和班长，多次评选为优秀团支部<br>校级学生代表，联署提案并多次参与学生代表大会"
            },
            practice: {
                title: "实践经历：",
                content: "<a href=\"images/实习证明.pdf\" target=\"_blank\" class=\"cert-link\">科大讯飞实习</a>，数学AI模型训练与优化；<a href=\"images/志愿时长.pdf\" target=\"_blank\" class=\"cert-link\">志愿服务时长</a>累计161小时。"
            }
        },
        contact: {
            title: "联系我"
        },
        table: {
            courseName: "课程名称",
            courseType: "课程性质",
            grade: "成绩",
            credits: "学分"
        },
        courses: {
            course1: "计算导论与程序设计课程设计",
            course2: "高等数学A(上)",
            course3: "数据结构",
            course4: "形式语言与自动机",
            course5: "Python程序设计",
            course6: "数字电路设计",
            course7: "数据结构与算法课程设计",
            course8: "Design & Build 实训(智能)",
            course9: "电子系统基础",
            course10: "离散数学",
            course11: "人工智能导论",
            course12: "产品开发与管理",
            course13: "概率论与数理统计",
            course14: "JAVA高级语言程序设计",
            course15: "线性代数",
            course16: "数据库系统",
            typeRequired: "必修",
            typeElective: "选修"
        }
    },
    en: {
        nav: {
            home: "Home",
            education: "Education",
            publications: "Publications",
            research: "Research",
            projects: "Projects",
            competitions: "Competitions",
            skills: "Skills",
            honors: "Honors",
            others: "Others",
            contact: "Contact"
        },
        home: {
            name: "Weiyi Li",
            research: "Research Interests: Multimodal Large Language Models & Multi-Agent Reasoning / AI Applications"
        },
        footer: {
            lastUpdate: "Last Updated"
        },
        modal: {
            selectLanguage: "请选择语言 / Please Select Language"
        },
        education: {
            title: "Education",
            university: "Beijing University of Posts and Telecommunications | Intelligent Science and Technology",
            period: "(2023.09 -- 2027.06)",
            gpa: "GPA: 3.87/4.0 | Weighted Average: 93.21/100",
            rank: "Major Rank: 3/96 (3.1%)",
            courses: "Key Courses"
        },
        publications: {
            title: "Publications",
            zhiwujie: {
                title: "Boundless Intelligence — Brain-Inspired Architecture Sports Agent",
                badge1: "National Innovation Competition",
                badge2: "Bronze Award"
            }
        },
        research: {
            title: "Research Experience",
            lab1: {
                name: "BUPT School of Cyberspace Security – National Engineering Laboratory for Mobile Internet Security Technology",
                period: "(2024.06 -- Present)",
                position: "Undergraduate Intern | Advisor: Prof. Guoshun Nan",
                project1: {
                    status: "(Manuscript prepared)",
                    desc1: "This paper first proposes MAS-SEE (Multi-Agent System for Security & Energy Efficiency), achieving dynamic optimization and balance of security and energy efficiency in 6G smart factories through lightweight edge detection and intent-driven strategy generation.",
                    desc2: "I designed the intent agent, implemented brain-like semantic recognition and administrator instruction parsing; constructed immune and coordination mechanisms for conflict detection and optimal allocation strategies; responsible for project paper writing and key architecture drawing."
                },
                project2: {
                    title: "[2] Ultra-Low Illumination Image Enhancement Method Based on Voltage Signal and Generative Intelligence Fusion (Patent)",
                    desc1: "This patent proposes an end-to-end microvolt-level voltage signal imaging method, achieving high signal-to-noise ratio and high-fidelity color image real-time generation under <0.01 lux conditions through time-domain, spatial-domain and frequency-domain multi-branch feature fusion and self-supervised dark frame correction.",
                    desc2: "I designed the entire processing flow from sensor acquisition to final image output, drew corresponding timing diagrams, and was responsible for patent document writing."
                }
            },
            lab2: {
                name: "Jianghuai Frontier Technology Collaborative Innovation Center AI Security Professional Department Laboratory",
                period: "(2025.06 -- Present)",
                position: "Undergraduate Intern | Advisor: Dr. Jiang Fang",
                project1: {
                    desc1: "This research proposes a CGSD framework that combines supervised contrastive learning and classification fine-tuning to achieve recognition of code generated by different LLMs.",
                    desc2: "I was responsible for dataset construction and annotation, style feature extraction and analysis, framework and experimental design, and independently completed the paper writing."
                },
                project2: {
                    desc1: "This research proposes a self-supervised + adversarial training network intrusion detection framework that improves the system's robustness against adversarial samples.",
                    desc2: "I was responsible for the design of the self-supervised learning module, the construction of adversarial training strategies, experimental analysis, and participated in paper writing."
                }
            },
            lab3: {
                name: "CAS Institute of Automation - Key Laboratory of Complex System Cognition and Decision",
                period: "(2026.01 -- Present)",
                position: "Undergraduate Intern | Advisor: Prof. Kaiqi Huang"
            }
        },
        projects: {
            title: "Projects",
            project1: {
                title: "[1] Harmful Speech Detection Model",
                content: "Lightweight fine-tuning of Llama-13B using LoRA, designed five-dimensional malicious value vector output with radar chart visualization, generated lightweight model using INT8 quantization; responsible for dataset construction, label system design, and model training."
            },
            project2: {
                title: "[2] \"Boundless Intelligence — Brain-Inspired Architecture Sports Agent\" (Bronze Award, China International College Students Innovation Competition)",
                content: "Based on national table tennis athlete dataset, integrated graph neural networks and spatiotemporal dual-stream models to achieve millimeter-level action quantification and intelligent tactical analysis; responsible for action recognition and segmentation, action analysis logic design, and parameter optimization."
            },
            project3: {
                title: "[3] 2D LiDAR-Based Maze Navigation and Mapping Autonomous Mobile Robot (Team ranked top 10 in grade)",
                content: "Design&Build course project, code: <a href=\"https://github.com/getstronger-sys/Radar-car\" target=\"_blank\" class=\"code-link\">2D LiDAR-Based Maze Navigation and Mapping Autonomous Mobile Robot</a>. As project leader, independently completed SLAM real-time mapping, DWA local obstacle avoidance, and A* path planning, collaborated on sensor and control hardware integration."
            },
            project4: {
                title: "[4] Beijing Metro Query System (Independent Development)",
                content: "Data Structures and Algorithms course design, code: <a href=\"https://github.com/getstronger-sys/Beijing-Metro-Information-Query-System\" target=\"_blank\" class=\"code-link\">Beijing Metro Query System</a>. Implemented dual-strategy path planning based on adjacency list + min-heap optimization, improved query efficiency by 30% through route-level pruning, integrated real-time schedule data for dynamic route management and real-time departure simulation."
            },
            project5: {
                title: "[5] IET MIC 2025 Best Poster Award and Excellent Paper",
                content: "Paper \"Technology-Driven Sports Digital Twin: Human-Machine Collaborative Olympic Strategic Decision System\" proposes an Olympic-oriented strategic decision framework, combining K-means clustering, time series prediction, and Markov models to achieve medal distribution prediction and cross-national training optimization."
            }
        },
        competitions: {
            title: "Competitions",
            comp1: "2024 National College Students Mathematics Competition First Prize",
            comp2: "2025 National College Students Mathematical Modeling Competition National Second Prize",
            comp3: "2024 First University ICT Industry-Education Integration Innovation Competition Second Prize",
            comp4: "2024 National College Students English Competition Third Prize"
        },
        skills: {
            title: "Skills",
            programming: {
                title: "Programming Languages",
                content: "C/C++, Python, Java<br>SQL, HTML/CSS/JavaScript"
            },
            computer: {
                title: "Computer Fundamentals",
                content: "Data Structures & Algorithms<br>Database Technology, Git Version Control"
            },
            ai: {
                title: "AI/Machine Learning",
                content: "GenAI: VAE, GAN, Diffusion Models<br>CNN/RNN/Transformer<br>PyTorch/TensorFlow Frameworks"
            },
            other: {
                title: "English Proficiency & Other Skills",
                content: "LaTeX, DaVinci Editing & Color Grading<br><a href=\"images/英语成绩证明/2023213677_四级成绩证明.pdf\" target=\"_blank\" class=\"cert-link\">CET-4</a>, <a href=\"images/英语成绩证明/2023213677_六级成绩证明.pdf\" target=\"_blank\" class=\"cert-link\">CET-6</a>"
            }
        },
        honors: {
            title: "Honors",
            honor1: "National Scholarship (2023-2024, 2024-2025)",
            honor2: "University Outstanding Student (2023-2024) Outstanding Student Cadre (2024-2025)",
            honor3: "Beijing Outstanding Student (2025-2026)",
            honor4: "BUPT Outstanding League Member (2023-2024, 2024-2025)",
            honor5: "Selected for 2024 Winter trip, exchange study in UK",
            certificates: "Awards & Certificates",
            cert1: "National Scholarship Certificate",
            cert2: "National College Students Mathematics Competition First Prize",
            cert3: "National College Students Mathematical Modeling Competition National Second Prize",
            cert4: "National College Students English Competition Third Prize",
            cert5: "IET MIC Best Poster Award and Excellent Paper",
            cert6: "Municipal Mathematics Competition",
            cert7: "Provincial Mathematical Modeling Competition",
            cert8: "Outstanding Class Collective"
        },
        others: {
            title: "Others",
            studentWork: {
                title: "Student Work & Ideological-Political:",
                content: "Probationary member of the Communist Party of China<br>Secretary and class monitor of the Youth League branch, repeatedly selected as an excellent Youth League branch<br>School-level student representative, co-signed proposals and participated in student representative meetings multiple times"
            },
            practice: {
                title: "Practical Experience:",
                content: "<a href=\"images/实习证明.pdf\" target=\"_blank\" class=\"cert-link\">iFlytek internship</a>, mathematical AI model training and optimization; cumulative <a href=\"images/志愿时长.pdf\" target=\"_blank\" class=\"cert-link\">volunteer service hours</a>: 161 hours."
            }
        },
        contact: {
            title: "Contact Me"
        },
        table: {
            courseName: "Course Name",
            courseType: "Course Type",
            grade: "Grade",
            credits: "Credits"
        },
        courses: {
            course1: "Introduction to Computing and Programming Course Design",
            course2: "Advanced Mathematics A (Part 1)",
            course3: "Data Structures",
            course4: "Formal Languages and Automata",
            course5: "Python Programming",
            course6: "Digital Circuit Design",
            course7: "Data Structures and Algorithms Course Design",
            course8: "Design & Build Training (Intelligent)",
            course9: "Fundamentals of Electronic Systems",
            course10: "Discrete Mathematics",
            course11: "Introduction to Artificial Intelligence",
            course12: "Product Development and Management",
            course13: "Probability Theory and Mathematical Statistics",
            course14: "JAVA Advanced Language Programming",
            course15: "Linear Algebra",
            course16: "Database Systems",
            typeRequired: "Required",
            typeElective: "Elective"
        }
    }
};

// 当前语言
let currentLang = localStorage.getItem('language') || 'en';

// 翻译函数
function translate(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

// 更新页面语言
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // 更新所有带data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = translate(key);
        if (text) {
            // 如果包含HTML标签（如<br>, <a>, <strong>, <em>），使用innerHTML，否则使用textContent
            if (text.includes('<') && text.includes('>')) {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // 更新语言切换按钮
    const currentLangSpan = document.getElementById('currentLang');
    const targetLangSpan = document.getElementById('targetLang');
    if (lang === 'zh') {
        currentLangSpan.textContent = '中文';
        targetLangSpan.textContent = 'EN';
    } else {
        currentLangSpan.textContent = 'EN';
        targetLangSpan.textContent = '中文';
    }
    
    // 更新HTML lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

// 切换语言
function toggleLanguage() {
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLanguage(newLang);
}

// 选择语言并关闭模态框
function selectLanguage(lang) {
    updateLanguage(lang);
    closeLanguageModal();
}

// 关闭语言选择模态框
function closeLanguageModal() {
    const modal = document.getElementById('languageModal');
    if (modal) {
        modal.classList.remove('show');
        localStorage.setItem('languageSelected', 'true');
    }
}

// 页面加载时应用保存的语言
document.addEventListener('DOMContentLoaded', () => {
    // 检查是否已经选择过语言
    const languageSelected = localStorage.getItem('languageSelected');
    
    // 如果没有选择过语言，显示语言选择提示框
    if (!languageSelected) {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.classList.add('show');
        }
    } else {
        // 如果已经选择过，直接应用保存的语言
        updateLanguage(currentLang);
    }
    
    // 绑定语言切换按钮
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});
