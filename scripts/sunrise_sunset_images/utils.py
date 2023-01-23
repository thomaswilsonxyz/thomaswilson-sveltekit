import os 

def make_relative_file_name(path: str) -> str:
    dirname = os.path.dirname(__file__)
    return os.path.join(dirname, path)