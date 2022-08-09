import { YoutubeLayout } from '../layouts';
import { VideoCard, VideoList } from '../components/videos';

export const HomePage = () => {
	
	return (
		<YoutubeLayout>
			<VideoList>
					<VideoCard />
					<VideoCard />

					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
			</VideoList>
			
		</YoutubeLayout>
	)
}
