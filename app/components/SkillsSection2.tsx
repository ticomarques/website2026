import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-4 sm:py-8 px-4 bg-[#161B22] min-h-[100vh]">
			<div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl h-screen">
				<div className="max-w-6xl mx-auto">
					<h3 className="text-2xl top-12 uppercase mb-8 tracking-[20px] text-gray-500 text-center">Skills</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
						{[
							{
								category: 'UX/UI',
								skills: [
									{ name: 'Prototyping', level: 100 },
									{ name: 'Design System', level: 95 },
									{ name: 'Tests A/B', level: 90 },
									{ name: 'Interview/Research', level: 85 },
								],
								icon: '🎨',
								color: 'from-blue-500 to-blue-700',
							},
							{
								category: 'Frontend Development',
								skills: [
									{ name: 'React & Next.js', level: 90 },
									{ name: 'Redux/APIs', level: 85 },
									{ name: 'TypeScript', level: 90 },
									{ name: 'Modern CSS', level: 95 },
									{ name: 'Web Animation', level: 90 },
								],
								icon: '⚡',
								color: 'from-green-500 to-green-700',
							},
							{
								category: 'Backend & APIs',
								skills: [
									{ name: 'NodeJS', level: 90 },
									{ name: 'PHP', level: 80 },
									{ name: 'Python/Flask', level: 85 },
									{ name: 'GoLang', level: 85 },
									{ name: 'Java SpringBoot', level: 80 },
								],
								icon: '🚀',
								color: 'from-purple-500 to-purple-700',
							},
							{
								category: 'Database',
								skills: [
									{ name: 'POSTGRES', level: 90 },
									{ name: 'SQLite', level: 90 },
									{ name: 'MySQL/MariaDB', level: 90 },
									{ name: 'MongoDB/Cloud DBs', level: 85 },
								],
								icon: '🎨',
								color: 'from-blue-500 to-blue-700',
							},
							{
								category: 'Artificial Inteligence',
								skills: [
									{ name: 'AI Algorithms', level: 90 },
									{ name: 'Preparing / training / test models', level: 95 },
									{ name: 'RAG / Fine tunning', level: 85 },
									{ name: 'Backend + LLMs API', level: 88 },
								],
								icon: '⚡',
								color: 'from-green-500 to-green-700',
							},
							{
								category: 'Performance & DevOps',
								skills: [
									{ name: 'Web Performance', level: 92 },
									{ name: 'CI/CD', level: 88 },
									{ name: 'Docker', level: 85 },
									{ name: 'AWS', level: 82 },
								],
								icon: '🚀',
								color: 'from-purple-500 to-purple-700',
							},
						].map((category) => (
							<div key={category.category} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
								<div className="flex items-center gap-3 mb-6">
									<span className="text-3xl">{category.icon}</span>
									<h3 className="text-xl font-bold">{category.category}</h3>
								</div>
								<div className="space-y-4">
									{category.skills.map((skill) => (
										<div key={skill.name}>
											<div className="flex justify-between text-sm mb-1">
												<span>{skill.name}</span>
												<span className="text-gray-400">{skill.level}%</span>
											</div>
											<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
												<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
