use clap::Parser;
use std::fs::File;
use std::io::prelude::*;
use chrono::{DateTime, Utc};

#[derive(Parser)]
struct Cli {
    #[arg(short, long)]
    author: String,
    #[arg(short, long)]
    title: String,
    #[arg(short, long)]
    slug: String
}

fn main() {
    let args = Cli::parse();
    let now = Utc::now();
    let front_matter = make_front_matter(&args.title, &args.author, &args.slug, &now);
    let slug_with_date = make_slug_with_date(&args.slug, &now);
    let file_name = format!("{}{}", slug_with_date, ".md");

    let contents = get_contents_with_editor();

    let mut frontmatter_and_content = front_matter.to_owned();
    frontmatter_and_content.push_str("\n");
    frontmatter_and_content.push_str(&contents);
    
    let err = write_to_markdown_file(&file_name, &frontmatter_and_content);

    match err {
        Ok(_) => println!("File written successfully"),
        Err(e) => println!("Error writing file: {}", e)
    }
}


fn make_slug_with_date(slug: &str, date: &DateTime<Utc>) -> String {
    let date_string = date.format("%Y-%m-%d").to_string();
    let parts: Vec<String> = vec![date_string, String::from(slug)];
    return parts.join("-");
}


fn make_front_matter(title: &str, author: &str, slug: &str, date: &DateTime<Utc>) -> String {
    let date_date = date.format("%Y-%m-%d").to_string();
    let date_time = date.format("%H:%M:%S").to_string();
    
    let full_date_string = format!("{}T{}Z", date_date, date_time);
    let slug_with_date = make_slug_with_date(slug, date);
    
    
    return format!(
        "---\ntitle: \"{}\"\ndate: {}\nslug: {}\nauthor: {}\n---\n",
        title,
        full_date_string,
        slug_with_date,
        author,
    );
}

fn get_contents_with_editor() -> String {
    let file_path: String = String::from("temp.md");
    let mut file = File::create(&file_path).unwrap();
    
    file.write_all(b"").unwrap();
    
    drop(file);

    std::process::Command::new("vim")
        .arg("temp.md")
        .status()
        .expect("failed to execute process");

    let mut file = File::open("temp.md").unwrap();
    let mut contents = String::new();
    file.read_to_string(&mut contents).unwrap();

    std::fs::remove_file(&file_path).unwrap();
    contents
}

fn write_to_markdown_file(file_path: &str, contents: &str) -> std::io::Result<()> {
    let file = File::create(file_path.to_string());

    match file {
        Ok(mut f) => f.write_all(contents.as_bytes()),
        Err(e) => panic!("Error creating file: {}", e)
    }
}

