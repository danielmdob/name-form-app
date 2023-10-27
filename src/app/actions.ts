'use server'

export async function getFullName({firstName, lastName}: FullName) {
  const loggedContent = `entered name: ${firstName} ${lastName}`;
  console.log(loggedContent);
  return loggedContent;
}
