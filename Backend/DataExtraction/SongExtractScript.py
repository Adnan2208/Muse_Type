import pandas as pd;
import kagglehub,os,json;

datasetPath = kagglehub.dataset_download("deepshah16/song-lyrics-dataset") + "/csv"

filePath = ""
for file in os.listdir(datasetPath):
    if file.endswith(".csv"):
        filePath = os.path.join(datasetPath,file)


    df = pd.read_csv(filePath)
    df = df[["Title","Lyric"]]

    with open("AllSongs.json","w",encoding="utf-8") as f:
        data_dict = df.to_dict(orient='records')
        json.dump(data_dict,f,indent=4,ensure_ascii=False)